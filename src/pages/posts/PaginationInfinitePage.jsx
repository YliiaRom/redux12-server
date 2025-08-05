import { useEffect, useRef, useState } from "react";
import PostsList from "./components/PostsList";
import { fetchPosts } from "@/store/postsThunk";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/store/postsSlice.js";

function PaginationInfinite() {
  console.log(`==========PaginationInfinite`);
  const posts = useSelector((state) => state.posts.postListInfinity);
  const currentPage = useSelector((state) => state.posts.currentPageNumber);
  const postsNumPerPage = useSelector((state) => state.posts.postsNumPerPage);
  const totalPageNumber = useSelector((state) => state.posts.totalPageNumber);
  const status = useSelector((state) => state.posts.status);

  const [fetching, setFetching] = useState(true);
  const currentPageRef = useRef(currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "success") {
      setFetching(false);
    }
  }, [status]);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  // fetchPosts
  useEffect(() => {
    if (!fetching) return;

    console.log(` useEffect> fetching === true`);
    console.log(`currentPage=`, currentPage);
    console.log(`postsNumPerPag=`, postsNumPerPage);
    //--fetch
    dispatch(
      fetchPosts({ pageNumber: currentPage, itemsPerPage: postsNumPerPage })
    );
  }, [dispatch, currentPage, fetching]);

  //--scroll
  useEffect(() => {
    function scrollHandler(e) {
      // --дошли до нижнего края страницы: Из общей высоты с учётом прокрутки -(сумма видимой области и текущее растояние от верхнего края страницы)
      let x = e.target.documentElement.scrollHeight;
      let xt = e.target.documentElement.scrollTop;
      let xb = window.innerHeight;
      let positionScroll = x - (xt + xb);
      console.log(
        `scrollHandler-X- висота з тим що вже прокрутили`,
        e.target.documentElement.scrollHeight
      );
      console.log(
        `scrollHandler-XT-тек положення від верха сторінки`,
        e.target.documentElement.scrollTop
      );
      console.log(
        `scrollHandler-XB-висота брауз(відима область сторінки)`,
        window.innerHeight
      );
      console.log(`нижн край страницы`, positionScroll);
      //--!!!

      if (
        positionScroll < 100 &&
        currentPageRef.current < totalPageNumber &&
        status !== "loading"
      ) {
        console.log(`scroll:  positionScroll < 100`);

        dispatch(setCurrentPage(currentPageRef.current + 1));
        console.log(`currentPage=`, currentPage);
        console.log(`postsNumPerPag=`, postsNumPerPage);
        setFetching(true);
      }
    }
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [dispatch, totalPageNumber, fetching, status]);

  console.log(posts);
  return (
    <>
      <PostsList postsList={posts} />
    </>
  );
}

export default PaginationInfinite;
