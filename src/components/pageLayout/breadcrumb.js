function Breadcrumb() {
  return (
    <ul className="list-none flex items-center mb-4 flex-wrap">
      <li className="py-1 px-3 bg-gray-300">Organisation</li>
      <li className="py-1 px-3 bg-gray-300">Parking[NAME]</li>
      <li className="py-1 px-3 bg-gray-300">Administration</li>
      <li className="">Planning period</li>
    </ul>
  );
}

export default Breadcrumb;
