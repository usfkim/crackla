import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SearchResults() {
  // Dummy data
  const results = [
    { id: 1, name: "Service A", description: "Description for service A" },
    { id: 2, name: "Service B", description: "Description for service B" },
    { id: 3, name: "Service C", description: "Description for service C" },
  ];

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Card key={result.id}>
          <CardHeader>
            <CardTitle>{result.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{result.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
