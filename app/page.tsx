import Image from "next/image";
import { db } from "./db";

export default async function Home() {
  
  const items = await db.query.test.findMany();

  return (
    <div>
      {items.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
    
  );
}
