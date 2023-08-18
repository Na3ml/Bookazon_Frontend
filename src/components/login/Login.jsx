import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [post, setPost] = useState([]);
// https://bookazon.tadafoq.com/Bookazon_Backend/public/admin/dashboard
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      Users
      {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name}</p>
            
          </div>
        );
      })}
      
    </div>
  );
}

export default Users;