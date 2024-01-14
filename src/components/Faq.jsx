import "../css/index.css";

const Faq = () => {

    const sections = [
      {
        title: 'Metode Pengiriman',
        content: 'Kami menggunakan metode pengiriman reguler untuk semua pesanan, dengan menggunakan ekspedisi yang sudah kami tentukan.'
      },
      {
        title: 'Biaya Pengiriman',
        content: 'Saat proses checkout, kami akan menampilkan biaya pengiriman ke kota Anda. Untuk promo gratis biaya pengiriman akan diinfokan pada website dan social media kami.'
      },
      {
        title: 'Pengaduan Layanan',
        content: 'Jangan diadu lah emangnya ayam'
      }
    ];
  
    return (
        <>
      <div className="pointer-event-auto mt-20 p-3 bg-white rounded-xl shadow-md ml-16">
        <h1 className="mb-16 font-bold text-4xl">FAQ</h1>
        {sections.map((section, index) => (
          <details key={index} className="w-full">
            <summary className="pointer-event-auto font-semibold  bg-gray-200 rounded-md py-2 px-4">
              {section.title}
            </summary>
  
            <span className="pointer-event-auto px-4 py-2">
              {section.content}
            </span>
          </details>
        ))}
      </div>
      </>
    );
  };
  
  export default Faq;