import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1618670708336-2df80fdd0ecb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Mother's Dish Kelaniya
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <span className="singlePostAuthorWord">Author: </span>
            <b>Yasiru Thanthirige</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          maiores labore delectus dignissimos aspernatur cum a unde voluptate
          mollitia, eaque autem tenetur sit corrupti dicta et hic odio nihil
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus provident incidunt vitae labore neque id distinctio eos
          quaerat, modi iure molestiae consequuntur nulla aut ipsum voluptas
          error iusto qui tempore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus, dolorem iusto incidunt nihil illo nobis!
          Illum repudiandae dignissimos similique quidem quas ad optio ratione.
          Libero debitis doloribus magni ab accusantium. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Molestias maiores labore delectus
          dignissimos aspernatur cum a unde voluptate mollitia, eaque autem
          tenetur sit corrupti dicta et hic odio nihil voluptates. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repellendus provident
          incidunt vitae labore neque id distinctio eos quaerat, modi iure
          molestiae consequuntur nulla aut ipsum voluptas error iusto qui
          tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus, dolorem iusto incidunt nihil illo nobis! Illum repudiandae
          dignissimos similique quidem quas ad optio ratione. Libero debitis
          doloribus magni ab accusantium.
        </p>
      </div>
    </div>
  );
}
