import React, { Suspense, useEffect } from "react";
import {Row,Col, Spin} from "antd";
import { getPosts } from "./actions/posts";
import { useDispatch, useSelector } from "react-redux";
const TableView = React.lazy(() => import("./components/TableView"));

export default function App() {
  const dispatch = useDispatch();
  // const[list,setList]=useState([])
  const {
    posts: { posts: items },
  } = useSelector((state) => state);
  console.log("posts", items);

  useEffect(() => {
    dispatch(getPosts());
    //eslint-disable-next-line
  }, []);

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            
          }}
        >
          <Spin />
        </div>
      }
    >
        <Row style={{marginTop:'2rem'}}>
          <Col xs={{span:24}} md={{span:18,offset:3}}>
            <TableView data={items} />
          </Col>
        </Row>
    </Suspense>
  );
}
