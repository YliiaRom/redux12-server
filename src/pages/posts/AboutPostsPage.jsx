function AboutPostsPage() {
  return (
    <>
      <h2>Задача: реалізувати пагінацію по кнопках</h2>
      <p>1. додати видалення і додавання постів</p>
      <p>2. додати ще одну сторінку, у якій реалізовано infinite scroll</p>
      <div>
        <h3>видалення і додавання постів</h3>
        <div className="bgBlack">
          <p>
            export const <span className="accent">deletePosts</span> =
            createAsyncThunk(
            <br />
            "posts/delete",
            <br />
            async (<span className="accent">id,</span>
            &#123;rejectWithValue&#125;) =&gt; &#123;
            <br />
            try &#123;
            <br />
            const response = await{" "}
            <span className="accent">postsApi.delete(id)</span>;
            <br />
            return response.id;
            <br />
            &#125; catch (error) &#123;
            <br />
            return rejectWithValue(error.message);
            <br />
            &#125;
            <br />
            &#125;
            <br />
            );
          </p>
          <hr />
          <p>
            export const <span className="accent">createPost</span> =
            createAsyncThunk(
            <br />
            "post/create",
            <br />
            async (<span className="accent">item,</span> &#123; rejectWithValue
            &#125;) =&gt; &#123;
            <br />
            try &#123;
            <br />
            const res = await{" "}
            <span className="accent">postsApi.create(item)</span>;
            <br />
            return res;
            <br />
            &#125; catch (error) &#123;
            <br />
            return rejectWithValue(error.message);
            <br />
            &#125;
            <br />
            &#125;
            <br />
            );
          </p>
        </div>
        <h3>infinite scroll</h3>
        <div className="bgBlack">
          <p>
            .....useSelector()... <br />
            const status = useSelector((state) =&gt; state.posts.status); <br />
            <br />
            const [fetching, setFetching] = useState(true);
            <br />
            const currentPageRef ={" "}
            <span className="accent">useRef(currentPage)</span>;
            <br />
            const dispatch = useDispatch();
            <br />
          </p>
          <hr />
          <p>
            <br />
            useEffect(() =&gt; &#123;
            <br />
            if (status ===<span className="accent"> "success"</span>) &#123;
            <br />
            <span className="accent"> setFetching(false)</span>;
            <br />
            &#125; &#125;, [status]);
            <br />
          </p>
          <hr />
          <p>
            useEffect(() =&gt; &#123;
            <br />
            currentPageRef.current = currentPage;
            <br />
            &#125;, [currentPage]);
          </p>
          <hr />
          <p>
            <br />
            // fetchPosts
            <br />
            useEffect(() =&gt; &#123;
            <br />
            if (!fetching) return;
            <br />
            dispatch(
            <br />
            <span className="accent">fetchPosts</span>(&#123; pageNumber:
            currentPage, itemsPerPage: postsNumPerPage &#125;)
            <br />
            ); &#125;, [currentPage, fetching]);
          </p>
          <p>
            <br />
            //--scroll
            <br />
            useEffect(() =&gt; &#123;
            <br />
            function<span className="accent"> scrollHandler(e)</span> &#123;
            <br />
            // --дошли до нижнего края страницы= <br /> Из общей высоты с учётом
            прокрутки вычесть (сумму видимой области и текущее растояние от
            верхнего края страницы)
            <br />
            let x = e.target.documentElement.scrollHeight;
            <br />
            let xt = e.target.documentElement.scrollTop;
            <br />
            let xb = window.innerHeight;
            <br />
            let <span className="accent">positionScroll = x - (xt + xb);</span>
            <br />
            //--!!!
            <br />
            if ( positionScroll &lt;100 &&
            <br />
            currentPageRef.current &lt; totalPageNumber &&
            <br />
            status !== "loading"
            <br />
            ) <br />
            &#123;
            <br />
            <br />
            dispatch(
            <span className="accent">
              setCurrentPage(currentPageRef.current + 1)
            </span>
            );
            <br />
            <span className="accent"> setFetching(true);</span>
            <br />
            &#125;
            <br />
            &#125; document.
            <span className="accent">addEventListener("scroll",</span>{" "}
            scrollHandler);
            <br />
            return () =&gt; &#123;
            <br />
            document
            <span className="accent">.removeEventListener("scroll",</span>{" "}
            scrollHandler);
            <br />
            &#125;;
            <br />
            &#125;, [dispatch, totalPageNumber, fetching, status]);
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPostsPage;
