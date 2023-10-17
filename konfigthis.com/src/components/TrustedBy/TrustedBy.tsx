import { Center, Container, Group, Stack, Title, rem } from "@mantine/core";
import Image from "@/components/image";
import snaptrade from "../../../public/snaptrade-g.png";
import humanloop from "../../../public/humanloop-g.png";
import splitit from "../../../public/splitit-g.png";
import leap from "../../../public/leap-g.png";
import groundx from "../../../public/groundx-g.png";

export const TrustedBy = () => {
  return (
    <Container size="lg">
      <Center>
        <Stack>
          <Title
            sx={{ textAlign: "center", letterSpacing: rem(5) }}
            color="#666"
            order={6}
            my="xl"
          >
            TRUSTED BY
          </Title>
          <Group spacing={40} position="center">
            <Image src={snaptrade} height={40} alt="SnapTrade" />
            <Image src={humanloop} height={40} alt="Humanloop" />
            <Image src={splitit} height={40} alt="Splitit" />
            <Image src={leap} height={35} alt="Leap" />
            <Image src={groundx} height={35} alt="Groundx" />
          </Group>
        </Stack>
      </Center>
    </Container>
  );
};
