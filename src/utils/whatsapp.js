export const ATS_PHONE = "917500591700";
export const ATS_DISPLAY_PHONE = "+91 75005 91700";
export const ATS_MAPS_URL = "https://maps.app.goo.gl/FJmMGTEmECg1gBg4A?g_st=iwb";
export const ATS_INSTAGRAM_URL = "https://www.instagram.com/arya_tourist_service/";

export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${ATS_PHONE}?text=${encoded}`;
}

export function createBookingEnquiryMessage({
  fullName,
  phone,
  email,
  pickup,
  destination,
  travelDate,
  returnDate,
  passengers,
  vehiclePreference,
  tripType,
  requirements
}) {
  let msg = `*NEW BOOKING ENQUIRY - AARYA TOURIST SERVICE*\n\n`;
  msg += `👤 *Name:* ${fullName}\n`;
  msg += `📞 *Mobile:* ${phone}\n`;
  if (email) msg += `✉️ *Email:* ${email}\n`;
  msg += `📍 *Pickup Location:* ${pickup}\n`;
  msg += `🏁 *Destination:* ${destination}\n`;
  msg += `📅 *Travel Date:* ${travelDate}\n`;
  if (returnDate) msg += `🔄 *Return Date:* ${returnDate}\n`;
  msg += `👥 *Number of Passengers:* ${passengers || 'Not specified'}\n`;
  msg += `🚌 *Vehicle Preference:* ${vehiclePreference || 'Best suited luxury bus'}\n`;
  msg += `🛣️ *Trip Type:* ${tripType || 'Round Trip'}\n`;
  if (requirements) msg += `📝 *Additional Requirements:* ${requirements}\n`;
  msg += `\n_Please share tariff, vehicle availability and quotation._`;
  return msg;
}

export function createVehicleEnquiryMessage(vehicleName) {
  return `*VEHICLE TARIFF ENQUIRY - AARYA TOURIST SERVICE*\n\n` +
    `Hello Aarya Tourist Service, I am interested in checking availability and price quote for *${vehicleName}*.\n\n` +
    `Please share pricing per kilometer / day, inclusions, and booking process.`;
}

export function createDestinationEnquiryMessage(destName) {
  return `*DESTINATION TOUR ENQUIRY - AARYA TOURIST SERVICE*\n\n` +
    `Hello, I want to plan a group journey / bus booking to *${destName}*.\n\n` +
    `Kindly share suitable vehicle options, itinerary recommendations, and quotation.`;
}

export function createServiceEnquiryMessage(serviceTitle) {
  return `*SERVICE ENQUIRY - AARYA TOURIST SERVICE*\n\n` +
    `Hello, I would like to inquire about *${serviceTitle}* with Aarya Tourist Service.\n\n` +
    `Kindly provide details, fleet options, and booking assistance.`;
}

