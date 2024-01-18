import PropTypes from "prop-types";
import MeetingsBox from "./MeetingsBox";

export default function Home({
  user
}) {
  console.log(user);
 
  return (
    <>
      <div className=" pb-6 sm:pb-12 md:mb-1"></div>
      <div className="container lg:max-w-[81vw] mx-auto">
        <div className="w-full px-4 md:px-4">
          <div className="grid grid-cols-1 xl:grid-cols-9 items-center gap-3">
            <h1 className="col-span-2 text-2xl lg:text-3xl font-bold mb-3">Booking types</h1>
            <div className="col-span-7 ">
              <div className="flex justify-between flex-wrap ">
                <button
                  href="https://tidycal.com/dashboard/booking-types/create"
                  className="border border-[#1569ef] hover:border-[#1569ef] hover:text-[#fff] hover:bg-[#1569ef] text-[#1569ef] rounded px-3 py-1.5 text-base w-fit mb-3"
                >
                  + Create new booking type
                </button>
                <div className="flex justify-start flex-wrap gap-2 mb-3 items-center">
                  <button
                    className="border flex border-[#6c757d] text-center rounded px-3 py-1.5 text-base text-[#6c757d] hover:text-[#fff] hover:bg-[#6c757d] hover:border-[#6c757d] w-fit mb-0"
                    data-bs-toggle="modal"
                    data-bs-target="#embed-booking-page-modal"
                  >
                    Embed booking page
                    <div
                      className="icon-info ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Embed your full booking page on your website"
                    >
                      ?
                    </div>
                  </button>
                  <button
                    href="https://tidycal.com/mitashiv0101"
                    className="border flex border-[#6c757d] text-center rounded px-3 py-1.5 text-base text-[#6c757d] hover:text-[#fff] hover:bg-[#6c757d] hover:border-[#6c757d] w-fit mb-0"
                    rel="noreferrer"
                    target="_blank"
                  >
                    View your bookings page ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 block md:mb-8 pb-3 sm:pb-2 xl:pb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl-grid-cols-4 justify-start md:gap-x-4 lg:gap-x-6 xxl:gap-x-8 px-3 lg:px-4">
          <MeetingsBox check={true} />
          <MeetingsBox check={true}/>
          <MeetingsBox check={false}/>
          <MeetingsBox check={false} />
          <MeetingsBox check={true} />
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  user: PropTypes.string, 
};
