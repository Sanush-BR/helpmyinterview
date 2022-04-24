import React, { Component } from "react";
import { toast } from "react-toastify";
import Card from "./tag";
import jwtDecode from "jwt-decode";

class Cards extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    if (localStorage.getItem("loggedIn")) {
      toast("Welcome");
      localStorage.removeItem("loggedIn");
    }
    if (localStorage.getItem("signup")) {
      toast("Registered Successfully");
      localStorage.removeItem("signup");
    }
  }

  state = {
    cards: [
      {
        id: 1,
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        value: "AMAZON",
      },
      {
        id: 2,
        imgUrl:
          "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
        value: "MICROSOFT",
      },
      {
        id: 3,
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        value: "INFOSYS",
      },
      {
        id: 4,
        imgUrl:
          "https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png",
        value: "WIPRO",
      },
      {
        id: 5,
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
        value: "TCS",
      },
      {
        id: 6,
        imgUrl:
          "https://logos-world.net/wp-content/uploads/2021/11/Meta-Logo.png",
        value: "META",
      },
      {
        id: 7,
        imgUrl:
          "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
        value: "GOOGLE",
      },
      {
        id: 8,
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
        value: "INTEL",
      },
      {
        id: 9,
        imgUrl:
          "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
        value: "ADOBE",
      },
      {
        id: 10,
        imgUrl:
          "https://www.backbase.com/wp-content/uploads/2021/01/IBM-logo.png",
        value: "IBM",
      },
      {
        id: 11,
        imgUrl:
          "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png",
        value: "CISCO",
      },
      {
        id: 12,
        imgUrl:
          "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/10/Black-Apple-logo-on-dark-gray-background.jpg",
        value: "APPLE",
      },
    ],
  };

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "23px" }}>
        <div className="row my-row">
          {this.state.cards.map((m) => (
            <div className="col m-1" key={m.id} style={{ marginLeft: "5px" }}>
              <Card key={m.id} img={m.imgUrl} id={m.id} name={m.value} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
