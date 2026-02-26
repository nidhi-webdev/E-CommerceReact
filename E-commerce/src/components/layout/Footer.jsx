export const Footer = () => {
    return (
        <footer className="mt-12 bg-gray-800 text-gray-300 py-16 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <img src="./vite.svg" alt="logo" className="w-12 h-12" />
                    <p className="text-sm leading-relaxed">
                        Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!
                    </p>
                    <div className="flex gap-2">
                        <img src="https://i.postimg.cc/mg962ts6/bitcoin.png" alt="bitcoin" className="w-8" />
                        <img src="https://i.postimg.cc/Nj9dgJ98/visa.png" alt="visa" className="w-8" />
                        <img src="https://i.postimg.cc/3N3D35KV/paypal.png" alt="paypal" className="w-8" />
                        <img src="https://i.postimg.cc/P57P6D6h/mastercard.png" alt="mastercard" className="w-8" />
                    </div>
                </div>

                {/* Shopping Column */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase tracking-wider">Shopping</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Computer Store</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Laptop Store</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Accessories</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Sales & Discount</a></li>
                    </ul>
                </div>

                {/* Experience Column */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase tracking-wider">Experience</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Payment Method</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Delivery</a></li>
                        <li><a href="#" className="hover:text-amber-500 transition-colors">Return and Exchange</a></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase tracking-wider">Newsletter</h3>
                    <p className="text-sm">Be the first to know about new arrivals, sales & promos!</p>
                    <div className="pt-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent border-b border-gray-600 focus:border-amber-500 outline-none w-full pb-2 transition-colors"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
                <p>Design and Code by Thapa Technical</p>
            </div>
        </footer>
    )
}