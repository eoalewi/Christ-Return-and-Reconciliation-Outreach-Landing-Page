import { useState } from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Repentance and Renewal",
    image: "https://outpostministries.org/wp-content/uploads/2021/07/water-hands-splash-scaled.jpg",
    desc: "Turning away from sin and returning to God.",
   content: `Repentance is the doorway to a new life in Christ. It is more than just feeling sorry for sin — it is a deliberate turning away from sin and turning back to God with a sincere heart.

The Bible says in Acts 3:19, "Repent therefore and be converted, that your sins may be blotted out, so that times of refreshing may come from the presence of the Lord." This shows us that repentance brings not only forgiveness but also spiritual refreshing.

In today’s world, many people live without the awareness of sin, yet sin separates man from God (Isaiah 59:2). Repentance restores that broken relationship. It humbles the heart and opens the door for God’s mercy.

True repentance produces change. It transforms how we think, speak, and live. As John the Baptist declared, "Bear fruits worthy of repentance" (Matthew 3:8). This means our lives must reflect the change we claim.

God is always ready to receive those who return to Him. Like the prodigal son in Luke 15, no matter how far one has gone, the Father is waiting with open arms.

Repentance is not a one-time act but a lifestyle. Daily we examine ourselves, surrender to God, and allow the Holy Spirit to refine us.

If you desire renewal, begin with repentance. God’s grace is available, His mercy is sufficient, and His love is calling you back to Him today.`},
  {
    title: "The Gift of Redemption",
    image: "https://i0.wp.com/lovesickscribe.com/wp-content/uploads/2024/03/Special-People-2.png?fit=1920%2C1080&ssl=1",
    desc: "Embrace God’s redeeming power in your life.",
    content: `Redemption is the heart of the Gospel message. It is the act of God rescuing mankind from sin through the sacrifice of Jesus Christ.

The Bible declares in Ephesians 1:7, "In Him we have redemption through His blood, the forgiveness of sins, according to the riches of His grace." This redemption was paid at a great price — the blood of Jesus.

Sin held humanity captive, but Christ came to set us free. Through His death and resurrection, He broke the power of sin and gave us victory. Redemption means we are no longer slaves to sin but children of God.

Romans 3:23 reminds us that "all have sinned and fall short of the glory of God," but redemption gives us hope beyond our failures.

When we accept Christ, our past is washed away. 2 Corinthians 5:17 says, "If anyone is in Christ, he is a new creation; old things have passed away."

Redemption also gives us purpose. We are not just saved from something, but saved for something — to serve God and proclaim His goodness.

As a missionary message, redemption must be shared. Many are still in bondage, waiting to hear that freedom is available in Christ.

Accept the gift of redemption today and walk in the freedom that only Jesus can give.`},
  {
    title: "Experiencing God’s Love",
    image: "https://d6zb2yxvzmqfc.cloudfront.net/wp-content/uploads/2019/12/Experience-Gods-Love-Social-Media-Image-compressor.jpg",
    desc: "God’s love is unconditional and transformative.",
    content: `God’s love is the foundation of our faith. It is not based on our performance but on His nature.

John 3:16 declares, "For God so loved the world that He gave His only begotten Son..." This love is sacrificial, unconditional, and eternal.

Many people struggle with rejection, pain, and loneliness, but God’s love heals every broken heart. Romans 5:8 says, "While we were still sinners, Christ died for us." This shows that His love reaches us even in our worst state.

Experiencing God’s love transforms us. It removes fear, as 1 John 4:18 says, "Perfect love casts out fear."

When we truly understand His love, we begin to reflect it. We forgive others, show compassion, and live in humility.

God’s love is not just to be received but to be shared. As missionaries, we are called to demonstrate His love to the world through our actions and words.

No matter your past, God loves you deeply. Open your heart and experience the transforming power of His love today.`},
  {
    title: "The Kingdom of God",
    image: "https://www.removetheglasses.com/assets/uploads/media-uploader/the-kingdom-of-god1684659947.jpg",
    desc: "Living in alignment with God’s eternal Kingdom.",
    content: `The Kingdom of God is the central message of Jesus Christ. It represents God’s rule, authority, and presence in the lives of believers.

In Matthew 6:33, Jesus said, "Seek first the kingdom of God and His righteousness, and all these things shall be added to you." This means the Kingdom must be our top priority.

The Kingdom of God is not just a future hope; it is a present reality. Luke 17:21 says, "The kingdom of God is within you."

Living in the Kingdom requires righteousness, obedience, and faith. It means surrendering our will to God and allowing Him to reign in our lives.

The Kingdom also involves spreading the Gospel. Matthew 24:14 says the Gospel must be preached to all nations before the end comes.

As believers, we are ambassadors of the Kingdom. Our lives should reflect God’s values — love, truth, holiness, and justice.

The Kingdom of God is advancing, and we are called to be part of it. Let your life be a vessel through which God’s Kingdom is revealed on earth.`},
  {
    title: "Preparing for the Last Days",
    image: "https://d1rsehu7wj3da5.cloudfront.net/images/articles/jumbo/2261-ab9411b1-fb04-4cb0-8bbd-56087ed89554.jpg",
    desc: "Understanding the signs and living faithfully.",
    content: `We are living in times that the Bible describes as the last days. The signs are evident, and believers must be spiritually prepared.

Jesus warned in Matthew 24:42, "Watch therefore, for you do not know what hour your Lord is coming."

The last days require vigilance, holiness, and faithfulness. 2 Timothy 3:1 says, "In the last days perilous times will come."

Many will fall away, but those who remain rooted in Christ will stand firm. Preparation involves prayer, studying the Word, and living a holy life.

We must also be active in evangelism. The urgency of the times calls for bold preaching of the Gospel.

The return of Christ is not meant to bring fear but hope. Titus 2:13 calls it "the blessed hope."

Be ready. Live each day as if Christ could return at any moment. Stay faithful, stay watchful, and keep your lamp burning.`},
  {
    title: "Walking in Faith Daily",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800",
    desc: "Trust God in every moment.",
    content: `Faith is the foundation of the Christian life. Hebrews 11:1 defines it as "the substance of things hoped for, the evidence of things not seen."

Walking in faith means trusting God even when circumstances seem uncertain. It requires surrender and total dependence on Him.

2 Corinthians 5:7 says, "For we walk by faith, not by sight." This means we rely on God’s promises rather than our feelings.

Faith grows through the Word of God. Romans 10:17 says, "Faith comes by hearing, and hearing by the Word of God."

Every believer is called to live a life of faith — in decisions, challenges, and daily living.

Faith gives us victory. 1 John 5:4 says, "This is the victory that has overcome the world — our faith."

Choose to walk in faith daily and watch God move powerfully in your life.`},
  {
    title: "Power of Prayer",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    desc: "Prayer changes lives and situations.",
    content: `Prayer is a powerful tool given to every believer. It is our direct communication with God.

Philippians 4:6 says, "Be anxious for nothing, but in everything by prayer and supplication... let your requests be made known to God."

Prayer changes situations, hearts, and lives. It invites God’s intervention into human affairs.

Jesus Himself emphasized prayer, often withdrawing to pray (Luke 5:16).

Through prayer, we receive strength, direction, and peace. James 5:16 says, "The effective, fervent prayer of a righteous man avails much."

A strong prayer life is essential for spiritual growth and missionary impact.

Make prayer a daily habit, and watch God do the impossible.`},
  {
    title: "Purpose Driven Living",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGrQEunvHkKAw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1733930530819?e=2147483647&v=beta&t=MCVfiz2G8DBtFfUVvnLTs38GT8ft3RpOOSROAolmFgc",
    desc: "Discover God’s purpose for your life.",
    content: `Every believer has a divine purpose. God created you intentionally and for a reason.

Jeremiah 29:11 says, "For I know the plans I have for you... plans to give you a future and a hope."

Purpose is discovered through seeking God, studying His Word, and obeying His direction.

Ephesians 2:10 says we are "created in Christ Jesus for good works."

Living with purpose brings fulfillment and impact. It aligns our lives with God’s will.

Your purpose is connected to serving others and advancing God’s Kingdom.

Seek God, discover your purpose, and live intentionally for His glory.`},
  {
    title: "Fellowship and Unity",
    image: "https://iphc.org/discipleship/wp-content/uploads/sites/4/2019/04/Unity-Strong-in-Fellowship-1.jpg",
    desc: "Growing stronger together in Christ.",
    content: `Fellowship is essential for spiritual growth. Christianity is not meant to be lived alone.

Hebrews 10:25 says, "Not forsaking the assembling of ourselves together..."

Through fellowship, we receive encouragement, accountability, and strength.

Acts 2:42 shows how early believers continued in fellowship, breaking bread, and prayers.

Unity strengthens the body of Christ. Psalm 133:1 says, "How good and pleasant it is for brethren to dwell together in unity!"

In unity, we can achieve greater impact in ministry and outreach.

Stay connected, grow together, and build strong relationships in Christ.`}
];

function Blogs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleReadMore = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="blogs" style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Missionary Blog Posts
        </motion.h2>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Deepen your faith through teachings on repentance, redemption, God’s love,
          and living in the Kingdom of God.
        </motion.p>

        <div style={styles.grid}>
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              style={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div style={styles.imageWrapper}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={styles.image}
                />
              </div>

              {/* Content */}
              <div style={styles.content}>
                <h3 style={styles.title}>{blog.title}</h3>
                <p style={styles.desc}>{blog.desc}</p>

                {/* Animated Read More */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  style={styles.expand}
                >
                  <p style={styles.fullText}>{blog.content}</p>
                </motion.div>

                <button
                  style={styles.button}
                  onClick={() => toggleReadMore(index)}
                >
                  {activeIndex === index ? "Show Less ↑" : "Read More →"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f9fafb",
    padding: "100px 20px"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto"
  },

  subtitle: {
    color: "#6b7280",
    marginBottom: "60px",
    fontSize: "1.15rem",
    lineHeight: "1.7",
    maxWidth: "800px",
    margin: "0 auto 60px auto",
    textAlign: "center"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    gap: "50px"
  },

  card: {
    background: "white",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
  cursor: "pointer"
  },


cardHover: {
  transform: "scale(1.02)"
},

  imageWrapper: {
    overflow: "hidden"
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    transition: "transform 0.5s ease"
  },

  content: {
    padding: "28px"
  },

  title: {
    fontSize: "1.4rem",
    marginBottom: "10px"
  },

  desc: {
    color: "#6b7280",
    marginBottom: "15px",
    lineHeight: "1.6"
  },

  expand: {
    overflow: "hidden"
  },

  fullText: {
    marginTop: "10px",
    color: "#374151",
    lineHeight: "1.9",
    fontSize: "0.98rem",
    whiteSpace: "pre-line"
  },

  button: {
    marginTop: "20px",
    padding: "12px 22px",
    border: "none",
    background: "#1e3a8a",
    color: "white",
    cursor: "pointer",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "0.3s"
  }
};

export default Blogs;





