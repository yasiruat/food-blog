import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1618670708336-2df80fdd0ecb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Mains</span>
          <span className="postCategory">Snacks</span>
        </div>
        <span className="postTitle">Mother's Dish Kelaniya</span>
        <span className="postDate">1 hour ago</span>
        <p className="postDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aliquam illum error odio commodi odit fugit architecto, quidem, id
          alias tempora dicta, quia similique fugiat perspiciatis nostrum ex ab
          soluta? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Optio, eum aspernatur sint dolor porro tenetur alias minus ullam,
          adipisci asperiores atque. Veritatis qui impedit delectus accusamus
          perspiciatis iste error. Laboriosam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate eius obcaecati, animi maxime
          et eos tenetur a quaerat modi molestiae odit, qui ad quia rem
          temporibus officia laborum assumenda porro?
        </p>
      </div>
    </div>
  );
}
