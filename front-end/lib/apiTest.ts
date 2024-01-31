import axios from "axios";

export async function getAPI(type: string) {
    try {
      const productData = await axios.get("http://localhost:3030/" + type);
      return productData.data
    } catch (exceptions) {
      if (exceptions instanceof Error) console.error(exceptions);
    }
}

export async function postClientAPI(values: any) {
  try {
    const response = await axios.post("http://localhost:3030/clients/post", values);
    return response.data
  } catch (exceptions) {
    if (exceptions instanceof Error) console.error(exceptions);
  }
}