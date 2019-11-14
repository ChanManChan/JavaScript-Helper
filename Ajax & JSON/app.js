document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

//Load Customer
function loadCustomer(e){
  const xhr=new XMLHttpRequest();
  xhr.open('GET','customer.json',true); //<--it works the same way if we are fetching this from an external URL from a public API would work very similar and in this case we are getting it from a local file
  xhr.onload=function(){
    if(this.status===200){
      console.log(this.responseText);
      const customer=JSON.parse(this.responseText);
      const output=`
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      document.getElementById('customer').innerHTML=output; //<--data from the customer.json file is fetched asynchronously through the XHR object and then we are outputting it in the browser
    }
  }
  
  xhr.send();
}
//Load Customers
function loadCustomers(){
  const xhr=new XMLHttpRequest();
  xhr.open('GET','customers.json',true);
  xhr.onload=function(){
    if(this.status===200){
      console.log(this.responseText);
      const customers=JSON.parse(this.responseText);
      let output=''; //<--using let because we are going to reassign it inside the loop
      customers.forEach(function(customer){
       output +=`
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
      `;
      });
      console.log(output);
      document.getElementById('customers').innerHTML=output;
    }
  }
  xhr.send();
}