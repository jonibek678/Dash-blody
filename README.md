# Dash-blod
## Frontend (React)

```jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ws = new WebSocket("ws://localhost:3001");

export default function App() {
  const [logs, setLogs] = useState([]);
  const [command, setCommand] = useState("");

  useEffect(() => {
    ws.onmessage = (event) => {
      setLogs((prev) => [...prev, event.data]);
    };
  }, []);

  const sendCommand = () => {
    if (command.trim() !== "") {
      ws.send(command);
      setCommand("");
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white font-mono">
      <Card className="bg-zinc-900 text-white">
        <CardContent className="p-4 h-96 overflow-y-auto whitespace-pre-wrap text-sm">
          {logs.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </CardContent>
      </Card>
      <div className="mt-4 flex gap-2">
        <Input
          className="bg-zinc-800 text-white border-zinc-700"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendCommand()}
          placeholder="Yozing: say Hello!"
        />
        <Button onClick={sendCommand}>Yuborish</Button>
      </div>
    </div>
  );
}
