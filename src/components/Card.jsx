/* eslint-disable react/prop-types */ 

import style from "./card.module.scss"

export function Card(props) {
  return (
    <>
      <div className="col-lg-6 col-xxl-4 mb-5">
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div className={`${style.feature} ${style["mt-n4"]} bg-primary bg-gradient text-white rounded-3 mb-4`}>
              <i className={`bi bi-${props.icon}`}></i>
            </div>
            <h2 className="fs-4 fw-bold">{props.title}</h2>
            <p className="mb-0">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
