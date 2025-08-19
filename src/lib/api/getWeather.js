import client from "./client";

const BASE_URL =
  "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
const SERVICE_KEY = process.env.NEXT_PUBLIC_PUBLICDATA_KEY;

export async function getWeather({ baseDate, nx, ny }) {
  const url = `${BASE_URL}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=300&dataType=json&base_date=${baseDate}&base_time=0500&nx=${nx}&ny=${ny}`;

  try {
    const res = await client.get(url);
    return res.data;
  } catch (error) {
    console.error("날씨 데이터 요청 실패:", error);
    return null;
  }
}
