function Breadcrumb() {
  return (
    <ul className="bp-breadcrumb list-none flex font-sans font-bold text-xs text-blue items-center mb-4 flex-wrap mt-1">
      <li className="bg-gray-200 py-2.5 px-6 ">Organisation </li>
      <li className="bg-gray-200 py-2.5 px-6">Parking[NAME]</li>
      <li className="bg-gray-200 py-2.5 px-6">Administration</li>
      <li className="font-normal py-2.5 px-6">Planning period</li>
    </ul>
  );
}

export default Breadcrumb;
