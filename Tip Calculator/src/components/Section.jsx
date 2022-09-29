import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
const Section = () => {
  const [bill, setBill] = useState('');
  const [service, setService] = useState('');
  const [customer, setCustomer] = useState('');
  const [customerTip, setCustomerTip] = useState([null]);
  const [lists, setLists] = useState([]);
  const [customerQuantity, setCustomerQuantity] = useState([null]);
  const [sum, setSum] = useState(null);

  const getCustomer = () => {
    setCustomerQuantity(lists.length);
    setSum(
      customerTip.reduce((total, num) => {
        return total + num;
      })
    );
    console.log(sum);
  };

  const getList = () => {
    let tip = (bill * service) / 100;
    setCustomerTip([...customerTip, tip]);

    let count = customer;
    if (bill && service && customer) {
      setLists([...lists, { customers: count, tips: tip }]);
      setBill('');
      setService('');
      setCustomer('');
    }
  };

  const inputBillChangeHandler = (event) => {
    setBill(Number(event.target.value));
  };
  const serviceChangeHandler = (val) => {
    setService(Number(val.target.value));
  };
  const customerChangeHandler = (item) => {
    setCustomer(item.target.value);
  };
  return (
    <Container>
      <div style={{ textAlign: ' center' }}>
        <div style={{ paddingBottom: '20px' }}>
          <h2>Enter Your Bill Amount </h2>
          <input type="number" onChange={inputBillChangeHandler} value={bill} />
        </div>
        <hr />

        <div>
          <span>How was the Service-</span> &nbsp;&nbsp;
          <select value={service} onChange={serviceChangeHandler}>
            <option value="">....choose option...</option>
            <option value="20">Excellent</option>
            <option value="15">Very Good</option>
            <option value="10">Good</option>
            <option value="5">Poor</option>
          </select>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <span>Enter the Customer name</span>&nbsp;&nbsp;
          <input
            type="text"
            onChange={customerChangeHandler}
            value={customer}
          />
          &nbsp;&nbsp;
          <Button
            style={{
              backgroundColor: 'purple',
            }}
            onClick={getList}
          >
            ADD CUSTOMER
          </Button>
        </div>
        <hr />
        <div style={{ margin: '10px 20px', backgroundColor: 'grey' }}>
          CUSTOMER LIST
        </div>
        {lists.map((elem, index) => (
          <h6 key={index}>
            {elem.customers} has offered Rs.{elem.tips} Tip.
          </h6>
        ))}
        <Button onClick={getCustomer} variant="success">
          Click to calculate total Customer and tip value
        </Button>
        <Table
          style={{
            backgroundColor: 'grey',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th>No. of customer</th>
              <th>Tip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {' '}
              <td>{customerQuantity}</td>
              <td>{sum}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default Section;
