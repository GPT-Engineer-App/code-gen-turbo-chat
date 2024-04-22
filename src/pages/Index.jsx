// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { FaPython, FaTerminal, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendCode = async () => {
    if (!input.trim()) return;

    // Simulate sending code to a Python execution environment (this is just a placeholder)
    const simulatedResponse = `Executing Python code: ${input}`;
    const cleanedResponse = simulatedResponse.replace(/[\"\'\.,;:!]/g, "");

    setHistory((prev) => [...prev, { input: input, output: cleanedResponse }]);
    setOutput(cleanedResponse);
    setInput("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Python Code Chat <FaPython />
        </Heading>
        <Text>Write Python code and see it executed in the terminal. No punctuation in responses!</Text>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          {history.map((entry, index) => (
            <Text key={index} fontSize="sm">
              <FaTerminal /> {entry.input} <br />
              <strong>Output:</strong> {entry.output}
            </Text>
          ))}
        </Box>
        <Input placeholder="Write Python code here..." value={input} onChange={handleInputChange} size="md" />
        <Button leftIcon={<FaPaperPlane />} colorScheme="teal" onClick={handleSendCode}>
          Send Code
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
