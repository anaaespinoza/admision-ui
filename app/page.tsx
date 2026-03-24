import Container from "@mui/material/Container";

import ContactoSection from "@/packages/components/home/contactossection/Contactossection";
import ConvocatoriaSection from "@/packages/components/home/convocatoriassection/Convocatoriassection";
import OfertaEducativaSection from "@/packages/components/home/ofertaeducativa/Ofertaeducativasection";
import PreguntasCard from "@/packages/components/home/preguntascard/preguntascard";
import Hero from "@/packages/shared/common/hero/Hero";

export default function Page() {
  return (
    <div>
      <Hero
        title="Admisiones 2026"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        image="/assets/resources/school.jpg"
        chipLabel="Convocatoria abierta"
        buttonText="Registrarse como Aspirante"
        buttonHref="/admision"
      />
      <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
        <ConvocatoriaSection />
        <PreguntasCard />
        <OfertaEducativaSection />
        <ContactoSection />
      </Container>
    </div>
  );
}
