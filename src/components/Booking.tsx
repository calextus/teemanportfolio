
import { motion } from 'framer-motion';
import { Check, Mail, Phone, MapPin, Clock } from 'lucide-react';

const packages = [
  {
    title: "Live Show",
    price: "$500",
    features: [
      "90-minute performance",
      "Professional sound equipment",
      "Standard lighting setup",
      "2 crew members"
    ]
  },
  {
    title: "Private Event",
    price: "$800",
    features: [
      "2-hour performance",
      "Custom song selection",
      "Premium sound & lighting",
      "3 crew members",
      "Meet & greet"
    ]
  },
  {
    title: "Custom Package",
    price: "Contact for Quote",
    features: [
      "Flexible duration",
      "Full production setup",
      "Custom requirements",
      "VIP experience",
      "Exclusive content"
    ]
  }
];

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Book Teeman
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{pkg.title}</h3>
              <p className="text-3xl font-bold text-white mb-6">{pkg.price}</p>
              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Get in Touch</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
              <p className="text-gray-300">+27 </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-300">bookings@teeman.com</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
              <p className="text-gray-300">KZN, South Africa</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Hours</h4>
              <p className="text-gray-300">Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}