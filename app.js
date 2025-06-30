"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState;

// Header Component
var Header = function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-red-600 text-white py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto flex justify-between items-center px-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Hard Rock Excavation, Septic and Landscape LLC"), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "mx-2 hover:underline"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#testimonials",
    className: "mx-2 hover:underline"
  }, "Testimonials"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "mx-2 hover:underline"
  }, "Contact"))));
};

// Hero Component
var Hero = function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-red-100 py-20 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl font-bold mb-4"
  }, "Comprehensive Outdoor services in Mid-Missouri"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg mb-6"
  }, "Hard Rock Excavation, Septic and Landscape LLC serves Mid-Missouri with all outdoor solutions."), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
  }, "Schedule Now")));
};

// Services Component
var Services = function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-center mb-8"
  }, "Our Services"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white shadow-lg rounded-lg text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/placeholder-excavation.jpg",
    alt: "Excavation Service Placeholder",
    className: "w-full h-48 object-cover mb-4"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold mb-2"
  }, "Excavation"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-left"
  }, /*#__PURE__*/React.createElement("li", null, "Land Clearing"), /*#__PURE__*/React.createElement("li", null, "Site Grading"), /*#__PURE__*/React.createElement("li", null, "Driveway Grading"), /*#__PURE__*/React.createElement("li", null, "Debris Haul-Off"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white shadow-lg rounded-lg text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/placeholder-septic.jpg",
    alt: "Septic Service Placeholder",
    className: "w-full h-48 object-cover mb-4"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold mb-2"
  }, "Septic Services"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-left"
  }, /*#__PURE__*/React.createElement("li", null, "Maintenance"), /*#__PURE__*/React.createElement("li", null, "New Installations"), /*#__PURE__*/React.createElement("li", null, "Repairs"), /*#__PURE__*/React.createElement("li", null, "Inspections"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white shadow-lg rounded-lg text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/placeholder-landscaping.jpg",
    alt: "Landscaping Service Placeholder",
    className: "w-full h-48 object-cover mb-4"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold mb-2"
  }, "Landscaping"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-left"
  }, /*#__PURE__*/React.createElement("li", null, "Lawn Maintenance (Mowing, Trimming, Edging, Blowing)"), /*#__PURE__*/React.createElement("li", null, "Tree Pruning and Removal"), /*#__PURE__*/React.createElement("li", null, "Aeration and Overseeding"), /*#__PURE__*/React.createElement("li", null, "Chemical Applications"), /*#__PURE__*/React.createElement("li", null, "Erosion Control"), /*#__PURE__*/React.createElement("li", null, "Debris Clean-Up"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white shadow-lg rounded-lg text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/placeholder-delivery.jpg",
    alt: "Delivery Service Placeholder",
    className: "w-full h-48 object-cover mb-4"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold mb-2"
  }, "Delivery"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-left"
  }, /*#__PURE__*/React.createElement("li", null, "Mulch"), /*#__PURE__*/React.createElement("li", null, "Dirt"), /*#__PURE__*/React.createElement("li", null, "Aggregate"), /*#__PURE__*/React.createElement("li", null, "Plants"), /*#__PURE__*/React.createElement("li", null, "Trees"), /*#__PURE__*/React.createElement("li", null, "Yard Stone"), /*#__PURE__*/React.createElement("li", null, "Yard Fixtures"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white shadow-lg rounded-lg text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/placeholder-hardscape.jpg",
    alt: "Hardscape Service Placeholder",
    className: "w-full h-48 object-cover mb-4"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-semibold mb-2"
  }, "Hardscape"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-left"
  }, /*#__PURE__*/React.createElement("li", null, "Retaining Walls"), /*#__PURE__*/React.createElement("li", null, "Patios"), /*#__PURE__*/React.createElement("li", null, "Outdoor Living Spaces"), /*#__PURE__*/React.createElement("li", null, "Outdoor Kitchens"))))));
};

// Testimonials Component
var Testimonials = function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    className: "bg-gray-100 py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-center mb-8"
  }, "What Our Customers Say"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white shadow-lg rounded-lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "italic mb-4"
  }, "\"Hard Rock Excavation, Septic and Landscape LLC saved the day with fast service in Mid-Missouri!\""), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "\u2013 Jane D., Homeowner")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 bg-white shadow-lg rounded-lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "italic mb-4"
  }, "\"Professional with a complete comprehensive outdoor service in Mid-Missouri.\""), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold"
  }, "\u2013 Mark S., Property Manager")))));
};

// Contact Component with Netlify Forms
var Contact = function Contact() {
  var _useState = useState({
      name: '',
      email: '',
      message: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var handleChange = function handleChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-bold text-center mb-8"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
    className: "max-w-lg mx-auto"
  }, /*#__PURE__*/React.createElement("form", {
    name: "contact",
    method: "POST",
    "data-netlify": "true",
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "contact"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name",
    className: "block text-sm font-medium"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    className: "w-full p-2 border rounded-lg",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange,
    className: "w-full p-2 border rounded-lg",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "message",
    className: "block text-sm font-medium"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "message",
    name: "message",
    value: formData.message,
    onChange: handleChange,
    className: "w-full p-2 border rounded-lg",
    rows: "4",
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
  }, "Send Message")))));
};

// Footer Component
var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-red-600 text-white py-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 text-center"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2025 Hard Rock Excavation, Septic and Landscape LLC. All rights reserved."), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Phone: (660) 888-2306 | Email: jonmudd12hre@gmail.com"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mx-2 hover:underline"
  }, "Facebook"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mx-2 hover:underline"
  }, "Twitter"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mx-2 hover:underline"
  }, "Instagram"))));
};

// Schema Markup
var Schema = function Schema() {
  return /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hard Rock Excavation, Septic and Landscape LLC",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hard Rock Road",
      "addressLocality": "Mid-Missouri",
      "addressRegion": "MO",
      "postalCode": "65011"
    },
    "telephone": "(660) 888-2306",
    "url": "https://hresl.com"
  }));
};

// Main App Component
var App = function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Schema, null));
};

// Render the App
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
