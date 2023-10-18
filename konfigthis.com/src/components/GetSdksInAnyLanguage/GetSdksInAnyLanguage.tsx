import {
  Text,
  Button,
  Col,
  Container,
  Grid,
  Title,
  Group,
  rem,
  Anchor,
} from "@mantine/core";
import typescript from "../../../public/typescript.png";
import python from "../../../public/python.png";
import go from "../../../public/go.png";
import java from "../../../public/java.png";
import csharp from "../../../public/csharp.png";
import ruby from "../../../public/ruby.png";
import swift from "../../../public/swift.png";
import php from "../../../public/php.png";
import Image from "@/components/Image";

export function GetSdksInAnyLanguage() {
  return (
    <Container my={rem(150)} size="lg">
      <Grid>
        <Col order={1} orderMd={2} span={12} md={5}>
          <Title mb={rem(10)} order={2}>
            Get SDKs in any language
          </Title>
          <Text c="dimmed" fz="sm">
            Konfig{" "}
            <Anchor href="https://konfigthis.com/docs/reference/language-and-oas-support">
              supports all major languages
            </Anchor>{" "}
            so your customers can easily integrate with your API no matter the
            stack they use
          </Text>

          <Button
            component="a"
            target="_blank"
            href="https://konfigthis.com/schedule-demo"
            color="dark"
            size="lg"
            radius="md"
            mt="xl"
          >
            Learn more
          </Button>
        </Col>
        <Col order={2} orderMd={1} span={12} md={7}>
          <Group position="center" spacing="xl" mx={rem(50)}>
            <Image src={typescript} width={75} height={75} alt="TypeScript" />
            <Image src={python} width={69} height={75} alt="Python" />
            <Image src={go} width={100} height={100} alt="Go" />
            <Image src={java} width={54} height={100} alt="Java" />
            <Image src={csharp} width={66} height={75} alt="C#" />
            <Image src={ruby} width={75} height={75} alt="Ruby" />
            <Image src={swift} width={75} height={75} alt="Swift" />
            <Image src={php} width={112} height={60} alt="PHP" />
          </Group>
        </Col>
      </Grid>
    </Container>
  );
}
