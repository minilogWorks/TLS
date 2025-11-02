import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="mx-auto w-[90%] lg:w-[75%] py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* SERVICE TIMES */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Clock className="w-7 h-7 text-[#b69121]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Service Times
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700">
              <div>
                <p className="font-bold text-[#b69121] mb-1">Sunday</p>
                <p className="leading-relaxed">9:30 AM – Worship Service</p>
              </div>
              <div>
                <p className="font-bold text-[#b69121] mb-1">Wednesday</p>
                <p className="leading-relaxed">7:00 PM – Worship Service</p>
                <p className="text-sm italic text-gray-500 mt-1">
                  (During Lent & Advent only)
                </p>
              </div>
            </div>
          </div>

          {/* LOCATION & CONTACT */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-7 h-7 text-[#b69121]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Visit Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* MAP */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7537402683597!2d-1.5744144242379576!3d6.677401993317781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9587bb15c3dd%3A0xe0924ee70e3f1da2!2sIndependence%20Hall%20KNUST!5e0!3m2!1sen!2sgh!4v1762101160410!5m2!1sen!2sgh"
                  className="w-full h-64 grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* CONTACT INFO */}
              <div className="flex flex-col justify-between space-y-6 text-gray-700">
                <div>
                  <p className="font-bold text-xl text-[#b69121]">
                    The Lord's Shepherd Ministries International
                  </p>
                  <p className="mt-2 leading-relaxed">
                    Independence Hall
                    <br />
                    KNUST, Kumasi
                    <br />
                    Ghana
                  </p>
                </div>

                <div>
                  <a
                    href="tel:+233558899273"
                    className="flex items-center gap-2 hover:text-[#b69121] transition"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+233 55 889 9273</span>
                  </a>
                </div>

                <button className="group flex items-center gap-3 bg-[#b69121] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a37d1a] transition shadow-lg hover:shadow-xl">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} The Lord's Shepherd Ministries
            International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
