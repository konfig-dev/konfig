import {
  Blockquote,
  Container,
  SimpleGrid,
  Title,
  Text,
  rem,
} from "@mantine/core";

export const Quotes = () => {
  return (
    <Container className="mb-52" size="lg">
      <div>
        <Title order={1}>Loved by Growing API Teams</Title>
        <Text c="dimmed">{"Don't take our word for it"}</Text>
      </div>
      <div className="pt-8 flex flex-col sm:flex-row gap-12">
        <Blockquote
          className="border bg-white p-12 rounded-xl"
          color="dark"
          cite="- Peter Hayes, Co-Founder & CTO, Humanloop"
        >
          {`SDK maintenance is time consuming, especially across multiple
          languages, and slows down our product delivery. Konfig help removes
          this pain point in a way that doesn't require behaviour change on our
          part—using our existing OpenAPI spec and integrating seamlessly into
          our existing CI/CD.`}
        </Blockquote>
        <Blockquote
          className="border bg-white p-12 rounded-xl"
          color="dark"
          cite="- Alex Sutherland, Back End Developer, SnapTrade"
        >
          {`A lot of the SDK's are in languages that our team is not super well
          versed in. In order to write these by hand we would have to learn the
          language syntax and spend hours compiling, debugging and reworking
          code. This process is so much easier and faster.`}
        </Blockquote>
      </div>
    </Container>
  );
};
