export default function OrderItem() {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex justify-between mb-2">
        <div>
          <h3 className="font-semibold">Order #12345</h3>
          <p className="text-sm text-gray-500">Date: 2023-10-27</p>
        </div>
        <div>
          <p className="font-semibold">$209.98</p>
          <p className="text-sm text-right text-green-500">Completed</p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold">Items:</h4>
        <ul className="list-disc list-inside">
          <li>Service A</li>
          <li>Service B</li>
        </ul>
      </div>
    </div>
  );
}
