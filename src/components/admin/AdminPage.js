import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import axios from "../../api/axios";
import useFetch from "../../util/useFetch";
import { render } from "@testing-library/react";

const AdminPage = () => {
  const notify = () => toast("THÊM MÓN MỚI THÀNH CÔNG");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsOpen1(!isOpen1);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [foodType, setFoodType] = useState("");
  const [data] = useFetch("https://thucannhanh-production.up.railway.app/food");
  const orderDetail =  axios.get('https://thucannhanh-production.up.railway.app/payment')
  const order =  axios.get('https://thucannhanh-production.up.railway.app/payment')

  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [oreder, setOrder] = useState('');
  const [total, setTotal] = useState('');
  const [customer, setCustomer] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [admin, setAdmin] = useState('');
  const [adminName, setAdminName] = useState('');
  const [food, setFood] = useState('');
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const api='https://thucannhanh-production.up.railway.app/order'
  const api1='https://thucannhanh-production.up.railway.app/orderdetail'
  const api2='https://thucannhanh-production.up.railway.app/customer/'
  const api3='https://thucannhanh-production.up.railway.app/admin/'
  const api4='https://thucannhanh-production.up.railway.app/food/'
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  
useEffect(()=>{
  try {
    axios.get(api).then((data)=>{
      setData1(data)
      const a = data.data
      console.log(data)
      a.map((item1)=>{
        setOrder(item1.id)
        setTotal(item1.total)
        setStatus(item1.status)
        setDate(item1.createDate)
        setCustomer(item1.customer)
        setAdmin(item1.admin)
        console.log(item1)
      }) 
    })
  } catch (error) {
    
  }

},[])

useEffect(()=>{
  axios.get(api1).then((data)=>{
    setData2(data)
    console.log(data)
    const b = data.data
    b.map((item)=>{
      setQuantity(item.quantity)
      setFood(item.food)
    })
  
  })
},[])

useEffect(()=>{
  axios.get(api2+`${customer}`).then((data)=>{
    const adminName = data.data
    setCustomerName(adminName.name)
  })
})

useEffect(()=>{
  axios.get(api3+`${admin}`).then((data)=>{
    const adminName = data.data
    setAdminName(adminName.name)
  })
})

useEffect(()=>{
   
axios.get(api4+`${food}`).then((data) => {
  const foods=data.data
  setFoodName(foods.name)
 
});
})


const confirmOrder = async(id,e)=>{
  //e.preventDefault()
  //alert('https://thucannhanh-production.up.railway.app/order/status/accept/'+`${id}`)
  axios.put('https://thucannhanh-production.up.railway.app/order/status/accept/'+`${id}`,{status:2})
  window.location.reload();
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(
          "https://thucannhanh-production.up.railway.app/food",
          JSON.stringify({
            name: name,
            image: img,
            ingredient: ingredient,
            price: price,
            foodType: foodType,
          })
          //JSON.stringify({ user, pwd }),
        )
        .then((data) => {
          notify()
          console.log("asd:  ", data);
        });


      console.log("first");

    } catch (err) {

    }
  };


  return (
    <React.StrictMode>
      <Row>
        <Col xs={2}>
          <Button
            outline
            size="lg"
            color="primary"
            onClick={toggle}
            style={{ marginBottom: "1rem", width: "100%" }}
          >
            THÊM MÓN ĂN
          </Button>
        </Col>
        <Col xs={10}>
          <Collapse  isOpen={isOpen} >
          <p style={{'textAlign':'center','fontSize':'40px'}}>THÊM MÓN ĂN</p>
            <Form style={{'alignContent':'center'}}
              method="POST"
              onSubmit={handleSubmit}
              action="https://thucannhanh-production.up.railway.app/food"
            >
              <FormGroup>
                <Label for="nameFood">TÊN MÓN ĂN</Label>
                <Input
                  id="nameFood"
                  name="name"
                  placeholder="Tên món ăn"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="nlFood">NGUYÊN LIỆU</Label>
                <Input
                  id="nlFood"
                  name="name"
                  placeholder="Tên nguyên liệu"
                  type="text"
                  onChange={(e) => setIngredient(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="priceFood">GIÁ</Label>
                <Input
                  id="priceFood"
                  name="price"
                  placeholder="Giá"
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageFood">HÌNH ẢNH</Label>
                <Input
                  id="imageFood"
                  name="img"
                  placeholder="Hình ảnh"
                  type="text"
                  onChange={(e) => setImg(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="categoryFood">DANH MỤC</Label>
                <Input
                  id="categoryFood"
                  name="foodType"
                  type="select"
                  onChange={(e) => setFoodType(e.target.value)}
                >
                  <option value={0}>Thức ăn</option>
                  <option value={1}>Nước uống</option>
                </Input>
              </FormGroup>
              <Button  onSubmit={notify}>Submit</Button>
              <ToastContainer />
            </Form>
          </Collapse>
        </Col>
      </Row>


      <Row>
        <Col xs={2}>
          <Button
             outline
            size="lg"
            color="primary"
            onClick={toggle1}
            style={{ marginBottom: "1rem", width: "100%" }}
          >
            XÁC NHẬN ĐƠN HÀNG
          </Button>
        </Col>
        <Col xs={10}>
          <Collapse isOpen={isOpen1}>
        
            <p style={{'textAlign':'center','fontSize':'40px'}}>BẢNG XÁC NHẬN ĐƠN HÀNG</p>
            <Table bordered borderless hover responsive size="sm" style={{'textAlign':'center'}}>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Create Date</th>
                  <th>Customer</th>
    
                  
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {
                data1.data && data1.data.map((item)=>{
                  console.log(data2)
                  if(item.total > 5)alert('So  luong hon 5')
                 return(
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.createDate}</td>
                    
                  <td>{customerName}</td>
      
                  <td>{item.total}</td>
                  {item.status ===2?<td style={{'color':'green','fontStyle':'bold','fontWeight':'bold','textAlign':'center'}}>Completed</td>:<td> <Button onClick={confirmOrder(item.id)}>Confirm</Button> </td>}
                  </tr>
                 )
                })
              }
                {/* <tr>
                  <th scope="row">{oreder}</th>
                  <td>{date}</td>
                  <td>{customerName}</td>
                  <td>{adminName}</td>
                  <td>{foodName}</td>
                  <td>{quantity}</td>
                  <td>{total}</td>
                  
                  {status ===2?<td style={{'color':'green','fontStyle':'bold','fontWeight':'bold','textAlign':'center'}}>Completed</td>:<td> <button onClick={confirmOrder}>Confirm</button> </td>}
                </tr> */}
    
              
              </tbody>
            </Table>
          
          </Collapse>
        </Col>
      </Row>
    </React.StrictMode>
  );
};

export default AdminPage;
