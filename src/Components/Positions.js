import React from "react";
import { Form, Input, Modal, Row, Col, Button, InputNumber } from "antd";
// import { BiRupee } from "react-icons/bi";
import { UpOutlined } from "@ant-design/icons";
import "./Positions.css";

class Positions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      data: [],
      result: 0,
    };
  }

  onFinish = (values) => {
    console.log(values);
    let existData = this.state?.data?.length > 0 ? this.state.data : [];
    existData.push(values);
    // console.log(existData);
    this.setState({ data: existData, modal: false });
    this.cal(existData);
  };

  cal = (data) => {
    let res = 0;
    data?.map((e) => (res += e?.total));
    if (res.toString().includes("-")) {
      let newRes = res.toString().split("-")[1];
      this.setState({ result: newRes });
      console.log(newRes, "mknkjhvyjcvgh");
    } else {
      this.setState({ result: res });
    }
  };

  render() {
    const { modal, data, result } = this.state;
    // console.log(data);
    return (
      <>
        <div className="main-con">
          <Row className="top-con">
            <div className="sub-con">
              <div
                style={{
                  backgroundColor: "#0c0cc9",
                  minHeight: "3vh",
                  minWidth: "2vw",
                }}
              ></div>
              <h1 className="heading">
                F&O Positions{" "}
                <span className="para1">{`(${data?.length})`}</span>
              </h1>
            </div>
            <span>
              <UpOutlined
                style={{
                  fontSize: "12px",
                  marginLeft: "-50px",
                  color: "grey",
                  fontWeight: "600",
                }}
                onClick={() => this.setState({ modal: true })}
              />
            </span>
          </Row>
        </div>

        <div>
          {data?.map((data) => (
            <>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "2px solid #ececec",
                }}
              >
                <Row
                  style={{
                    width: "90%",
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Col span={12}>
                    <p className="para1">{data?.delivery}</p>
                  </Col>
                  <Col
                    span={12}
                    // offset={1}
                    className="para1"
                    style={{
                      textAlign: "right",
                      //   display: "flex",
                      //   justifyContent: "space-between",
                      //   alignItems: "center",
                    }}
                  >
                    {data?.q}
                  </Col>
                </Row>
                <Row
                  style={{
                    width: "90%",
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-18px",
                  }}
                >
                  <Col span={17}>
                    <p
                      style={{ textAlign: "left", fontSize: "16px" }}
                      className="para1"
                    >
                      {data?.name}
                    </p>
                  </Col>
                  <Col
                    span={7}
                    // offset={1}
                    className="para1"
                    style={{
                      textAlign: "right",
                      fontSize: "14px",
                      color: data?.total?.toString().includes("-")
                        ? "red"
                        : "#50C878",
                      fontWeight: "500",
                      //   display: "flex",
                      //   justifyContent: "space-between",
                      //   alignItems: "center",
                    }}
                  >
                    {`₹${data?.total?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}`}
                  </Col>
                </Row>
                <Row
                  style={{
                    width: "90%",
                    justifyContent: "space-betwween",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-18px",
                  }}
                >
                  <Col span={12}>
                    <p className="para1">{`Mkt ₹${data?.mkt?.toLocaleString(
                      undefined,
                      {
                        minimumFractionDigits: 2,
                      }
                    )}`}</p>
                  </Col>
                  <Col
                    span={12}
                    // offset={1}
                    className="para1"
                    style={{
                      textAlign: "right",

                      //   display: "flex",
                      //   justifyContent: "space-between",
                      //   alignItems: "center",
                    }}
                  >
                    {`Avg ₹${data?.avg.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}`}
                  </Col>
                </Row>
              </div>
              {/* <hr
                style={{
                  width: "100%",
                  // marginTop: "-6px",
                  borderColor: "#ececec",
                }}
              /> */}
            </>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "#dfdfdf",
            minHeight: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Col span={12} offset={12}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Col
                  span={12}
                  onClick={() => this.setState({ totalModal: true })}
                  style={{
                    color: "#747474",
                    fontWeight: "500",
                    textAlign: "right",
                  }}
                >
                  Total returns{" "}
                </Col>
                <Col
                  span={12}
                  className="para"
                  style={{
                    color: result?.toString().includes("-") ? "red" : "#50C878",
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "right",
                  }}
                >
                  {`  ₹ ${result.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        {modal && (
          <Modal
            title="Basic Modal"
            open={modal}
            onCancel={() => {
              this.setState({
                modal: false,
              });
            }}
            style={{ minHeight: "100vh" }}
            destroyOnClose={true}
            footer={[
              <div>
                <Button
                  onClick={() => {
                    this.setState({
                      modal: false,
                    });
                  }}
                  //   style={{
                  //     height: "35px",
                  //     width: "100px",
                  //     borderRadius: "5px",
                  //     marginRight: "25px",
                  //   }}
                  type="ghost"
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  //   style={{
                  //     height: "35px",
                  //     width: "100px",
                  //     borderRadius: "5px",
                  //   }}
                  form="form"
                >
                  Save
                </Button>
              </div>,
            ]}
          >
            <Form id={"form"} onFinish={this.onFinish}>
              <Row>
                <Col span={24}>
                  <span>Delivery</span>
                  <Form.Item
                    name={"delivery"}
                    rules={[
                      { required: true, message: "Please Enter Delivery!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <span>0</span>
                  <Form.Item
                    name={"q"}
                    rules={[{ required: true, message: "Please Enter 0!" }]}
                  >
                    <InputNumber style={{ width: "100%" }} />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <span>Name</span>
                  <Form.Item
                    name={"name"}
                    rules={[{ required: true, message: "Please Enter Name!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>total</span>
                  <Form.Item
                    name={"total"}
                    rules={[{ required: true, message: "Please Enter Total!" }]}
                  >
                    <InputNumber
                      // formatter={(value) =>
                      //   ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      // }
                      // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span>Mkt</span>
                  <Form.Item
                    name={"mkt"}
                    rules={[{ required: true, message: "Please Enter Mkt!" }]}
                  >
                    <InputNumber
                      // formatter={(value) =>
                      //   ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      // }
                      // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <span>Avg</span>
                  <Form.Item
                    name={"avg"}
                    rules={[{ required: true, message: "Please Enter Net!" }]}
                  >
                    <InputNumber style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        )}
      </>
    );
  }
}

export default Positions;
