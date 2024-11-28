import axios from "axios";
import { IProduct, ISimilar } from "./redux/types";


interface ApiResponse<T> {
  data: T;
}


interface NewCommentResponse {
  name: string;
  email: string;
  body: string;
  productId: string;
}

export const getProduct = async (
  id: string,
  doSuccessProduct: (data: IProduct) => void,
  doErrorProduct: () => void
) => {
  const config = {
    method: "get",
    url: `http://localhost:3000/api/products/${id}`,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response: ApiResponse<IProduct> = await axios(config);
    const data: IProduct = response.data; 
    doSuccessProduct(data);
  } catch (e) {
    doErrorProduct();
  }
};

export const getSimilars = async (
  id: string,
  doSuccessSimilars: (data: ISimilar[]) => void,
  doErrorSimilars: () => void
) => {
  const config = {
    method: "get",
    url: `http://localhost:3000/api/products/similars/${id}`,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response: ApiResponse<ISimilar[]> = await axios(config);
    const data: ISimilar[] = response.data; 
    doSuccessSimilars(data);
  } catch (e) {
    doErrorSimilars();
  }
};

export const setNewComment = async (
  productId: string,
  name: string,
  email: string,
  body: string,
  doSuccessNewComment: (data: NewCommentResponse) => void,
  doErrorNewComment: () => void
) => {
  const config = {
    method: "post",
    url: `http://localhost:3000/api/comments`,
    data: {
      name,
      email,
      body,
      productId,
    },
    headers: { "Content-Type": "application/json" }, 
  };

  try {
    const response: ApiResponse<NewCommentResponse> = await axios(config);
    const data: NewCommentResponse = response.data; 
    doSuccessNewComment(data); 
  } catch (e) {
    doErrorNewComment();
  }
};

export const getProducts = async (
  doSuccess: (data: IProduct[]) => void,
  doError: () => void
) => {
  const config = {
    method: "get",
    url: "http://localhost:3000/api/products",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response: ApiResponse<IProduct[]> = await axios(config);
    const data: IProduct[] = response.data; 
    doSuccess(data);
  } catch (e) {
    doError();
  }
};