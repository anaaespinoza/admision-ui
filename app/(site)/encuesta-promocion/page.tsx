import EncuestaForm from "@/packages/components/encuestaform/EncuestaForm";
import Hero from "@/packages/shared/common/hero/Hero";

export default function Page() {
  return (
    <>
      <Hero
        title="¡Tu opinión es clave!"
        subtitle="Queremos saber qué te trajo al TSJ. Tu experiencia nos ayuda a crear el futuro de nuestra comunidad universitaria. Participa y sé parte del cambio."
        image="/assets/resources/encuest-prom.jpg"
      />
      <EncuestaForm />
    </>
  );
}
