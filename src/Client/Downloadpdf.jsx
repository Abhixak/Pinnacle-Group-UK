import contractPDF from "../assets/EEA agreement Pinnacle-Nirvana.pdf";

export default function ContractDownloadBox() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = contractPDF;
    link.download = "EEA Agreement Pinnacle-Nirvana.pdf"; // rename file if you want
    link.click();
  };

  return (
    <div
      onClick={handleDownload}
      className="cursor-pointer bg-blue-600 text-white !px-5 !py-3 rounded-lg w-max hover:bg-blue-700 transition"
    >
      Download Contract
    </div>
  );
}
