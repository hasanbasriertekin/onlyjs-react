import "./_feature.module.scss";
import Card from "../../components/Card.jsx";

export function Features() {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <Card
            title={"Hedef Belirleme"}
            text={
              "Net, ölçülebilir ve kişisel hedefler koymak, ilerlemenizi takip etmenize ve odaklanmanıza yardımcı olur. Hedeflerinizi belirlerken gerçekçi olun ve onları adım adım gerçekleştirmek için plan yapın."
            }
          />
          <Card
            title={"İçsel Motivasyonu Keşfetme"}
            text={
              " Kendi değerlerinizi, tutkularınızı ve ilgi alanlarınızı tanımak, işleri yaparken daha fazla motive olmanıza yardımcı olabilir. İçsel motivasyon, uzun vadede sizi destekleyen bir kaynak olabilir."
            }
          />
          <Card
            title={"Olumlu Düşünce ve Zihinsel Güç"}
            text={
              "Olumlu düşünce tarzını benimsemek, zorluklarla başa çıkmanın ve engelleri aşmanın önemli bir yoludur. Pozitif bir zihinsel duruş, motivasyonunuzu korumanıza yardımcı olabilir."
            }
          />
          <Card
            title={"Disiplin ve Süreklilik"}
            text={
              "Başlangıçta belirlenen hedeflere ulaşmak için düzenli bir çaba ve disiplinli bir tutum gereklidir. Sürekli bir şekilde çalışmak ve azim göstermek, zamanla büyük başarılar elde etmenizi sağlar."
            }
          />
          <Card
            title={"Mola ve Dinlenme"}
            text={
              "Motivasyonunuzu sürdürmek için zaman zaman dinlenmeye ve kendinize bakmaya ihtiyacınız vardır. Zihinsel ve fiziksel sağlığınızı korumak için düzenli aralar verin."
            }
          />
          <Card
            title={"Destek ve İletişim"}
            text={
              "Başkalarıyla iletişim kurmak, destek almak ve paylaşmak da motivasyonunuzu artırabilir. İnsan ilişkileri ve paylaşım, sizi motive eden bir destek ağı oluşturmanıza yardımcı olabilir."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
