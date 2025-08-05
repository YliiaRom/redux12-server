import { createPost } from "@/store/postsThunk";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function PostForm() {
  console.log(`======= render PostForm`);

  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorIdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      authorId: authorIdRef.current.value,
    };

    dispatch(createPost(newItem));
  };
  return (
    <div className="sectionWrap">
      <form className="description postFormCss" onSubmit={handleSubmit}>
        <label>
          Заголовок:
          <input
            type="text"
            name="title"
            placeholder="title"
            ref={titleRef}
            required
          />
        </label>
        <label className="big">
          Текст поста:
          <textarea
            placeholder="ххх..."
            className="big"
            name="body"
            ref={bodyRef}
            required
          />
        </label>
        <label>
          ID Автора:
          <input
            type="text"
            placeholder="Yuliia-1"
            name="authorId"
            ref={authorIdRef}
            required
          />
        </label>
        <button className="mainBtn" type="submit">
          Додати пост
        </button>
      </form>
    </div>
  );
}

export default PostForm;
//   id: "post-1",
//   authorId: "CryptoVision",
//   title: "Майбутнє штучного інтелекту: що нас чекає?",
//   body: "Штучний інтелект стрімко розвивається, змінюючи наш світ. Від самокерованих автомобілів до персональних асистентів, ШІ вже інтегрований у наше повсякденне життя. Але що далі?",
//   likesNumber: 153,
//   dislikesNumber: 28,
//   createdAt:
