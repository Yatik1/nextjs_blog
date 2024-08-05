import { unstable_noStore as noStore } from "next/cache";

const getData = async () => {
    noStore();
    const res = await fetch("/api/blog");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export default getData;
