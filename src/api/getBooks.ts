import axios from 'axios';
import { bookListType } from "@/types/common";

const url = `https://www.googleapis.com/books/v1/volumes?q=architecture%22&key=&printType=books&maxResults=40`;
const getBooks = () => {
  return axios
    .get(url)
    .then(( { data }: { data: bookListType }) => {
      
      return data;
    })
    .catch(() => {
      throw "error";
    });
};
export default getBooks