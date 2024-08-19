// src/components/DonationSection.jsx

// import React from "react";

const DonationSection = () => {
  return (
    <div id="donation" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#8d0102] mb-8">
        Support Our Journey
      </h2>
      <p className="lg:text-xl text-center text-gray-600 mb-8">
        We appreciate your desire to be a part of our day. For your gifts,
        kindly make use of any of the following account details:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Naira Account */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold text-[#8d0102] mb-4">
            Naira Account
          </h3>
          <p className="text-lg text-gray-600 mb-2">
            Bank:First Bank Nigeria Plc
          </p>
          <p className="text-lg text-gray-600 mb-2">Account Name:Isaac Oni</p>
          <p className="text-lg text-gray-600">Account Number: 3064699562</p>
          {/* <div className="bg-white shadow-md rounded-lg p-6"> */}
          <br />
          <p>OR</p>
          <br />
          {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Naira Account
          </h3> */}
          <p className="text-lg text-gray-600 mb-2">Bank:Access Bank</p>
          <p className="text-lg text-gray-600 mb-2">
            Account Name:Olawumi Christianah Oladejo
          </p>
          <p className="text-lg text-gray-600">Account Number: 1405638669</p>
        </div>
        {/* </div> */}
        {/* <p>Or</p> */}
        {/* OR */}

        {/* Foreign Account */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold text-[#8d0102] mb-4">
            Dollar Account
          </h3>
          <p className="text-lg text-gray-600 mb-2">
            Bank Name: Wells Fargo Bank, N.A.
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Account Holder: Isaac Oni
          </p>
          <p className="text-lg text-gray-600">
            Account Number: 40630177166037746
          </p>
          <p className="text-lg text-gray-600">Account Type: Checking</p>
          <p className="text-lg text-gray-600">Routing Number: 121000248</p>
          <p className="text-lg text-gray-600">
            Address: 580 California Street, San Francisco, CA 94104, US
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
