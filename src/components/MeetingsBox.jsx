import { useState } from "react";
import PropTypes from "prop-types";
export default function MeetingsBox({check}) {
  const [isChecked, setChecked] = useState(check);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <div className=" mb-6">
      <div className="shadow rounded-2">
        <div className="px-6 pt-6">
          <h2 className="h5 font-bold mb-6 text-xl line-clamp line-clamp-3">
            15 Minute Meeting
          </h2>
          <div className="flex justify-between border-[#dee2e6] border-b pb-1 mb-4 flex-wrap">
            <a
              href=""
              className="text-sm text-decoration-none font-bold text-truncate col target-blank"
              target="_blank"
              rel="noreferrer"
            >
              /15-minute-meeting
            </a>
            <input
              style={{
                opacity: 0,
                fontSize: "1px",
                top: "50px",
                left: "50px",
                position: "absolute",
              }}
              type="text"
              id="event461648"
              value=""
              onChange={handleToggle}
            />
            <a
              id="event461648CopyButton"
              className="p-0 text-sm font-light text-[#1569ef] text-decoration-none ml-6"
              rel="noreferrer"
            >
              Copy link
            </a>
          </div>

          <form
            method="post"
            action="https://tidycal.com/dashboard/booking-types/461648/disable-enable"
          >
            <input
              type="hidden"
              name="_token"
              onChange={handleToggle}
              value="b3tBeT555fNLzsTDDA2lK6YyINpUwC6kdJyyEP0D"
            />
            <div className="block min-h-6 mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox hidden"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div
                  className={`w-9 h-4 border  items-center rounded-full px-1 duration-500 ease-in-out ${
                    isChecked ? "bg-[#1569ef] border-[#1569ef]" : "#fff border-gray-400"
                  }`}
                >
                  <div
                    className={` translate-y-[1px] -translate-x-[3px] duration-500 ease-in-out w-3 h-3 rounded-full shadow-md transform ${
                      isChecked ? "translate-x-4 bg-[#fff] " : "bg-gray-400"
                    }`}
                  ></div>
                </div>
                <span className="pl-2 text-sm "> Booking is ON</span>
              </label>
            </div>
          </form>

          <div className="flex flex-wrap mb-3">
            <div className="col-12 sm:col-sm-6 flex items-center mb-3">
              <div className="w-[25px]">
                <img
                  className="inline-block"
                  src="https://assets.tidycal.com/img/icon-clock.svg"
                  alt="Duration"
                />
              </div>
              <div className="text-sm">15 minutes</div>
            </div>
          </div>
        </div>

        <div className="border-t px-4">
          <div className="w-100 block"></div>
          <div className="relative gradient-white-top gradient-white-bottom">
            <div
              className="pt-4 pb-6 btype-description-container"
              rel="noreferrer"
            >
              <div className="btype-description-preview">
                Book a meeting with me for 15 minutes!
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 border-t flex items-center justify-between flex-wrap">
          <div className="text-[#6c757d] mr-4 py-3">Share:</div>
          <div className="col flex justify-between items-center">
            <a
              href="sms:?&amp;body=15%20Minute%20Meeting%0Ahttps%3A%2F%2Ftidycal.com%2Fmitashiv0101%2F15-minute-meeting"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="my-3 mx-3"
                src="https://assets.tidycal.com/img/share-icon-message.svg"
                alt="Share as a message"
              />
            </a>
            <a
              href="mailto:?subject=15%20Minute%20Meeting&amp;body=15%20Minute%20Meeting%0A%0Ahttps%3A%2F%2Ftidycal.com%2Fmitashiv0101%2F15-minute-meeting"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="my-3 mx-3"
                src="https://assets.tidycal.com/img/share-icon-email.svg"
                alt="Share as an email"
              />
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Ftidycal.com%2Fmitashiv0101%2F15-minute-meeting"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="my-3 mx-3"
                src="https://assets.tidycal.com/img/share-icon-linkedin.svg"
                alt="Share on linkedin"
              />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftidycal.com%2Fmitashiv0101%2F15-minute-meeting&amp;description=15%20Minute%20Meeting%0Ahttps%3A%2F%2Ftidycal.com%2Fmitashiv0101%2F15-minute-meeting"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="my-3 mx-3"
                src="https://assets.tidycal.com/img/share-icon-facebook.svg"
                alt="Share on facebook"
              />
            </a>
            <a
              href="https://twitter.com/intent/tweet?text=15%20Minute%20Meeting%0Ahttps%3A%2F%2Ftidycal.com%2Fmitashiv0101%2F15-minute-meeting"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="my-3 mx-3"
                src="https://assets.tidycal.com/img/share-icon-twitter.svg"
                alt="Share on twitter"
              />
            </a>
          </div>
        </div>
        <div className="px-6 py-4 border-t flex justify-between">
          <a
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#embed-on-website-modal-461648"
            className="text-decoration-none font-normal block text-[#6c757c] mr-4"
            rel="noreferrer"
          >
            Embed on Website
          </a>
          <a
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#embed-on-email-modal-461648"
            className="text-decoration-none font-normal block text-[#6c757c] mr-4"
            rel="noreferrer"
          >
            Embed in Email
          </a>
        </div>
        <div className="px-6 py-4 border-t">
          <div className="flex justify-between items-center">
            <div className="col text-start">
              <form
                className="inline"
                method="post"
                action="https://tidycal.com/dashboard/booking-types/461648/delete"
              >
                <input
                  type="hidden"
                  name="_token"
                  onChange={handleToggle}
                  value="b3tBeT555fNLzsTDDA2lK6YyINpUwC6kdJyyEP0D"
                />{" "}
                <button
                  rel="noreferrer"
                  type="button"
                  className="text-[#dc3545] text-decoration-none  w-auto p-0"
                  //   style="margin: auto 0 auto auto;"
                >
                  Delete
                </button>
              </form>
            </div>

            <div className="col text-center">
              <a
                href="https://tidycal.com/dashboard/booking-types/461648/clone"
                className="text-decoration-none block"
              >
                Clone
              </a>
            </div>

            <div className="col text-end">
              <a
                href="https://tidycal.com/dashboard/booking-types/461648/edit"
                className="text-decoration-none block"
              >
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
MeetingsBox.propTypes = {
    check:PropTypes.bool
}