"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { mockTenders, type Tender } from "~/data/mockData";
import { Building, MapPin, Calendar, Scale, FileText, Users, Gavel, Clock, Mail, User, ClipboardList, Handshake } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image component

export default function TenderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [tender, setTender] = useState<Tender | null>(null);

  useEffect(() => {
    if (id) {
      const foundTender = mockTenders.find((t) => t.id === id);
      if (foundTender) {
        setTender(foundTender);
      } else {
        router.push("/app"); // Redirect if tender not found
      }
    }
  }, [id, router]);

  if (!tender) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center pt-32 pb-16">
        <p>Lade Ausschreibung...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section for Tender */}
          <div className="relative overflow-hidden rounded-lg shadow-xl mb-12">
            <Image
              src="/images/thisisengineering-BU8lpW2Bn30-unsplash.jpg" // Dummy image
              alt="Tender Background"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="relative p-8 md:p-12 lg:p-16 bg-gradient-to-t from-gray-900/80 to-transparent">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
                {tender.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {tender.subject}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-gray-300 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {tender.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Veröffentlicht: {tender.publishDate}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Key Information */}
            <div className="lg:col-span-2 bg-white/5 p-6 rounded-lg shadow-lg border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Wichtige Informationen</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-gray-300 text-lg">
                <div className="flex items-start gap-3">
                  <Building className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Auftraggeber:</dt>
                    <dd>{tender.client.name}</dd>
                    <dd className="text-sm text-gray-400">{tender.client.address}</dd>
                  </div>
                </div>
                {tender.client.contactPerson && (
                  <div className="flex items-start gap-3">
                    <User className="h-6 w-6 flex-shrink-0 text-blue-400" />
                    <div>
                      <dt className="font-semibold text-white">Ansprechpartner:</dt>
                      <dd>{tender.client.contactPerson}</dd>
                    </div>
                  </div>
                )}
                {tender.client.contactInfo && (
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 flex-shrink-0 text-blue-400" />
                    <div>
                      <dt className="font-semibold text-white">Kontakt:</dt>
                      <dd>{tender.client.contactInfo}</dd>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Ausführungsort:</dt>
                    <dd>{tender.executionLocation}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Ausführungsfrist:</dt>
                    <dd>{tender.executionPeriod}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardList className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Angebotsfrist:</dt>
                    <dd>{tender.deadlines.offerSubmission}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Bindefrist:</dt>
                    <dd>{tender.deadlines.bindingPeriod}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Vergabeunterlagen:</dt>
                    <dd><Link href="#" className="text-blue-400 hover:underline">Hier herunterladen</Link></dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Detailed Description */}
            <div className="lg:col-span-1 bg-white/5 p-6 rounded-lg shadow-lg border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Leistungsbeschreibung</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {tender.serviceDescription}
              </p>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg shadow-lg border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Verfahren und Kriterien</h2>
              <dl className="space-y-4 text-gray-300 text-lg">
                <div className="flex items-start gap-3">
                  <Gavel className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Verfahrensart:</dt>
                    <dd>{tender.procedureType}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Zuschlagskriterien:</dt>
                    <dd>{tender.awardCriteria}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <div>
                    <dt className="font-semibold text-white">Teilnahmebedingungen:</dt>
                    <dd>{tender.participationConditions}</dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Dummy Image Section */}
            <div className="relative overflow-hidden rounded-lg shadow-xl border border-white/10">
              <Image
                src="/images/pexels-tima-miroshnichenko-6474134.jpg" // Another dummy image
                alt="Construction Site"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
              <div className="relative p-6 bg-gradient-to-t from-gray-900/70 to-transparent h-full flex items-end">
                <p className="text-white text-lg font-semibold">
                  Visualisierung des Projekts oder relevante Branchenbilder.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}