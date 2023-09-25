import { Post } from "@/public/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

const getPost = async (id: string): Promise<Post[]> =>{
    const res = await fetch(`${URL}/${id}`); 

    return res.json();
};

export default getPost