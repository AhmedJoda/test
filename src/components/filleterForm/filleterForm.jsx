import React, { useState } from "react";
import "./filleterFrom.css";
import { Card } from "react-bootstrap";
import MySelector from "../filleterComponents/mySelector";
import WeedingHalls from "../filleterComponents/weedingHalls";
import Photographers from "../filleterComponents/photographers";
import MakeupArtists from "../filleterComponents/makeupArtists";

export default function FilleterForm() {
  const [services] = useState([
    <React.Fragment>
      Wedding Halls <i class="fas fa-place-of-worship" />
    </React.Fragment>,
    <React.Fragment>
      Photographers <i class="fas fa-camera" />
    </React.Fragment>,
    <React.Fragment>
      Makeup Artists <i class="fas fa-spa" />
    </React.Fragment>,
  ]);
  const [CurrentService, setCurrentService] = useState(services[0]);
  const [cities] = useState([
    { value: "cairo", label: "cairo" },
    { value: "Alexandria", label: "Alexandria" },
    { value: "Gia", label: "Gia" },
  ]);

  const handleChangeService = (service) => {
    setCurrentService(service);
  };

  const RenderFilleter = () => {
    switch (CurrentService) {
      case services[0]:
        return <WeedingHalls cities={cities} />;
        break;
      case services[1]:
        return <Photographers />;
        break;
      case services[2]:
        return <MakeupArtists />;
        break;
    }
  };

  return (
    <Card className="">
      <div className="filleter-container">
        <div className="row selector">
          <MySelector
            onChangeService={handleChangeService}
            options={services}
            title={CurrentService}
            handleOnChangeService
          />
        </div>
        <div className="row">
          {RenderFilleter()}
          <div className="col-sm">
            <button className="btn btn-danger">
              <i class="fas fa-search" />
              search
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
