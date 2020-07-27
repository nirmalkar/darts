import React from "react";
import { useSelector } from "react-redux";

const IShare = () => {
  const { shareData } = useSelector((state) => state.share);

  return (
    <div className="column">
      {shareData.map((share, i) => {
        const marketValue = (share.price * share.quantity).toFixed(2);

        const unrealized = (
          share.price * share.quantity -
          share.investedAmount
        ).toFixed(2);

        const percentReturns = (
          ((share.price * share.quantity - share.investedAmount) * 100) /
          share.investedAmount
        ).toFixed(2);

        return (
          <div className="card mt-3 mb-3 ml-3" key={share.name}>
            <div className="card-content">
              <div className="columns is-centered is-gapless is-flex">
                <div className="column is-2 mx-1">
                  <div className="card has-background-light hp-100">
                    <div className="card-content has-text-black">
                      <div className="columns">
                        <div className="column is-2">
                          <span className="mr-5  has-cursor-pointer">
                            <i className="fas fa-bars f-s-10" />
                          </span>
                        </div>
                        <div className="column is-4" style={Styles}>
                          <p className="f-s-10 mt-2">{share.name}</p>
                          <p className="f-s-12 f-w-bold has-text-info">
                            ${share.price}
                          </p>
                        </div>
                        <div className="column is-6" style={Styles}>
                          <p
                            style={{ color: "rgb(168,198,135)" }}
                            className="f-s-11 f-w-700"
                          >
                            iShares
                          </p>
                          <p className="f-s-7">By BlackDoc</p>
                          <p className="f-s-11 f-w-bold">S&P 500 Index</p>
                          <p className="f-s-10">US Equity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-3 mr-1">
                  <div className="card has-background-light hp-100">
                    <div
                      className="card-content has-text-black f-s-14"
                      style={Styles}
                    >
                      <i className="fas fa-database mr-3"></i>
                      <span cl>Quantity</span>
                      <span className="is-pulled-right f-w-700">
                        {share.quantity}
                      </span>
                      <br />
                      <span className="f-w-900 mr-3">@</span>
                      <span>Avg. Cost</span>
                      <span className="is-pulled-right f-w-700">
                        {(share.investedAmount / share.quantity).toFixed(2)}
                      </span>
                      <br />
                      <i className="fas fa-money-bill mr-2 "></i>
                      <span>Invested Amt</span>
                      <span className="is-pulled-right f-w-700">
                        {share.investedAmount}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="column is-3 mr-1">
                  <div className="card has-background-light hp-100">
                    <div
                      className="card-content has-text-black f-s-14"
                      style={Styles}
                    >
                      <span>Market Value</span>
                      <span className="is-pulled-right f-w-700">
                        ${marketValue}
                      </span>
                      <br />
                      <span className="has-text-grey">
                        % of portfolio value
                      </span>
                      <span className="is-pulled-right f-w-700">asdfasdf</span>
                      <br />
                      <div className="columns width-19 is-centered">
                        <div className="column is-10">
                          <progress
                            className="progress is-success is-small my-1"
                            value="45"
                            max="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-3 mr-1">
                  <div className="card has-background-light hp-100">
                    <div className="card-content f-s-14" style={Styles}>
                      <span className="f-w-700">Unrealized P/L</span>
                      <span className="is-pulled-right f-w-700">
                        {Math.abs(unrealized).toFixed(2)}
                      </span>
                      <br />
                      <span className="has-text-grey">% Return</span>
                      <span className="is-pulled-right f-w-700">
                        {percentReturns > 0 ? (
                          <span
                            style={{ position: "absolute", right: 60, top: 25 }}
                            className="has-text-danger"
                          >
                            <i className="fas fa-sort-down" />
                          </span>
                        ) : (
                          <span
                            style={{ position: "absolute", right: 60, top: 29 }}
                            className="has-text-success"
                          >
                            <i className="fas fa-sort-up" />
                          </span>
                        )}
                        {Math.abs(percentReturns)}%
                      </span>
                      <div className="columns my-3 is-gapless">
                        <div
                          className="column"
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <progress
                            className="progress is-danger is-small my-1"
                            style={{ borderRadius: "0px 50px 50px 0px" }}
                            value={
                              percentReturns < 0 ? Math.abs(percentReturns) : ""
                            }
                            max="100"
                          />
                        </div>
                        <div className="column">
                          <progress
                            className="progress is-success is-small my-1"
                            style={{ borderRadius: "0px 50px 50px 0px" }}
                            value={percentReturns > 0 ? percentReturns : ""}
                            max="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-1 mr-1">
                  <div className="card has-background-light hp-100">
                    <div className="card-content" style={Styles}>
                      <div className="field is-grouped">
                        <div className="control">
                          <button className="button is-primary is-outlined ml-2 width-4">
                            Buy
                          </button>
                        </div>
                      </div>
                      <div className="field is-grouped">
                        <div className="control">
                          <button className="button is-primary is-outlined ml-2 width-4">
                            Sell
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Styles = { overflowWrap: "anywhere", padding: ".3rem" };

export default IShare;
