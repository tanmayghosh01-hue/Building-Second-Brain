import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


type User = {
  _id: string;
  username: string;
};

type Content = {
  _id: string;
  title: string;
  link: string;
  tags: string[];
  type: "twitter" | "youtube"
  userId: User; // userId is an object containing _id and username
  __v: number;
};


export function useContent() {
  const [contents, setContents] = useState<Content[]>([]);

  function refresh() {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  }

  useEffect(() => {
    refresh();
  }, []);

  return {contents, refresh};
}
