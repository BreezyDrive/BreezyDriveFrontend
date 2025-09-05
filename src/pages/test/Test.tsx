import { useEffect, useState } from "react";
import "./Test.css";

function Test() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  // Effect 1: Chạy sau mỗi lần render
  useEffect(() => {
    console.log("Effect 1: Chạy sau mỗi lần render");
  });

  // Effect 2: Chỉ chạy một lần khi component mount
  useEffect(() => {
    console.log("Effect 2: Chỉ chạy một lần khi mount");
  }, []);

  // Effect 3: Chạy khi count thay đổi
  useEffect(() => {
    console.log("Effect 3: Count thay đổi:", count);
  }, [count]);

  // Effect 4: Chạy khi name thay đổi
  useEffect(() => {
    console.log("Effect 4: Name thay đổi:", name);
  }, [name]);

  // Effect 5: Chạy khi cả count hoặc name thay đổi
  useEffect(() => {
    console.log("Effect 5: Count hoặc name thay đổi");
  }, [count, name]);

  // Theo dõi số lần render - chỉ chạy khi count hoặc name thay đổi
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, [count, name]);

  return (
    <div className="test">
      <h1>Test Page - useEffect & Dependency Array</h1>
      
      <div className="test__section">
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>
          Tăng Count
        </button>
      </div>

      <div className="test__section">
        <h2>Name Input</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
        />
      </div>

      <div className="test__section">
        <h2>Thông tin</h2>
        <p>Số lần render: {renderCount}</p>
        <p>Count hiện tại: {count}</p>
        <p>Tên hiện tại: {name}</p>
      </div>

      <div className="test__section">
        <h2>Hướng dẫn</h2>
        <p>Mở Console (F12) để xem các effect chạy:</p>
        <ul>
          <li>Effect 1: Chạy sau mỗi lần render</li>
          <li>Effect 2: Chỉ chạy một lần khi mount</li>
          <li>Effect 3: Chạy khi count thay đổi</li>
          <li>Effect 4: Chạy khi name thay đổi</li>
          <li>Effect 5: Chạy khi count hoặc name thay đổi</li>
        </ul>
      </div>
    </div>
  );
}

export default Test; 