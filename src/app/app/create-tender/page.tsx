"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { mockTenders, type Tender } from "~/data/mockData";
 
 
 
import Image from "next/image";

export default function CreateTenderPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<Tender>({
    id: String(mockTenders.length + 1),
    title: "",
    location: "",
    publishDate: new Date().toLocaleDateString("de-DE"),
    client: {
      name: "",
      address: "",
      contactPerson: "",
      contactInfo: "",
    },
    subject: "",
    serviceDescription: "",
    executionLocation: "",
    executionPeriod: "",
    awardCriteria: "",
    participationConditions: "",
    procedureType: "",
    deadlines: {
      offerSubmission: "",
      bindingPeriod: "",
    },
    tenderDocuments: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("client.")) {
      const clientField = name.split(".")[1] as keyof Tender['client'];
      setFormData((prev) => ({
        ...prev,
        client: { ...prev.client, [clientField]: value },
      }));
    } else if (name.startsWith("deadlines.")) {
      const deadlineField = name.split(".")[1] as keyof Tender['deadlines'];
      setFormData((prev) => ({
        ...prev,
        deadlines: { ...prev.deadlines, [deadlineField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setPreviewImage(event.target.result);
        } else {
          setPreviewImage(null);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Tender Data:", formData);
    console.log("Preview Image Data (Base64):", previewImage);
    // In a real application, you would send this data and image to your backend.
    alert("Ausschreibung erfolgreich erstellt (Dummy-Funktion)!");
    router.push("/app"); // Redirect to tender overview
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section for Form */}
          <div className="relative overflow-hidden rounded-lg shadow-xl mb-12">
            <Image
              src="/images/pexels-tima-miroshnichenko-6474134.jpg" // Dummy background image
              alt="Form Background"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="relative p-8 md:p-12 lg:p-16 bg-gradient-to-t from-gray-900/80 to-transparent">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
                Neue Ausschreibung erstellen
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Füllen Sie alle Details aus, um eine neue Ausschreibung zu veröffentlichen.
              </p>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 p-8 rounded-lg shadow-lg border border-white/10 space-y-8"
          >
            {/* Allgemeine Informationen */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Allgemeine Informationen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Titel der Ausschreibung</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">Ort der Ausschreibung</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Gegenstand der Ausschreibung</label>
                  <textarea
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-300 mb-1">Detaillierte Leistungsbeschreibung</label>
                  <textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    value={formData.serviceDescription}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Auftraggeber Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Auftraggeber Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="client.name" className="block text-sm font-medium text-gray-300 mb-1">Name des Auftraggebers</label>
                  <input
                    type="text"
                    id="client.name"
                    name="client.name"
                    value={formData.client.name}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="client.address" className="block text-sm font-medium text-gray-300 mb-1">Adresse des Auftraggebers</label>
                  <input
                    type="text"
                    id="client.address"
                    name="client.address"
                    value={formData.client.address}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="client.contactPerson" className="block text-sm font-medium text-gray-300 mb-1">Ansprechpartner (optional)</label>
                  <input
                    type="text"
                    id="client.contactPerson"
                    name="client.contactPerson"
                    value={formData.client.contactPerson ?? ""}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="client.contactInfo" className="block text-sm font-medium text-gray-300 mb-1">Kontaktinformationen (optional)</label>
                  <input
                    type="text"
                    id="client.contactInfo"
                    name="client.contactInfo"
                    value={formData.client.contactInfo ?? ""}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Fristen und Bedingungen */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Fristen und Bedingungen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="executionLocation" className="block text-sm font-medium text-gray-300 mb-1">Ausführungsort des Projekts</label>
                  <input
                    type="text"
                    id="executionLocation"
                    name="executionLocation"
                    value={formData.executionLocation}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="executionPeriod" className="block text-sm font-medium text-gray-300 mb-1">Ausführungszeitraum</label>
                  <input
                    type="text"
                    id="executionPeriod"
                    name="executionPeriod"
                    value={formData.executionPeriod}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="deadlines.offerSubmission" className="block text-sm font-medium text-gray-300 mb-1">Angebotsfrist</label>
                  <input
                    type="text"
                    id="deadlines.offerSubmission"
                    name="deadlines.offerSubmission"
                    value={formData.deadlines.offerSubmission}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="deadlines.bindingPeriod" className="block text-sm font-medium text-gray-300 mb-1">Bindefrist des Angebots</label>
                  <input
                    type="text"
                    id="deadlines.bindingPeriod"
                    name="deadlines.bindingPeriod"
                    value={formData.deadlines.bindingPeriod}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="awardCriteria" className="block text-sm font-medium text-gray-300 mb-1">Zuschlagskriterien</label>
                  <textarea
                    id="awardCriteria"
                    name="awardCriteria"
                    value={formData.awardCriteria}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="participationConditions" className="block text-sm font-medium text-gray-300 mb-1">Teilnahmebedingungen</label>
                  <textarea
                    id="participationConditions"
                    name="participationConditions"
                    value={formData.participationConditions}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="procedureType" className="block text-sm font-medium text-gray-300 mb-1">Verfahrensart</label>
                  <input
                    type="text"
                    id="procedureType"
                    name="procedureType"
                    value={formData.procedureType}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="tenderDocuments" className="block text-sm font-medium text-gray-300 mb-1">Vergabeunterlagen (Link/Hinweis)</label>
                  <input
                    type="text"
                    id="tenderDocuments"
                    name="tenderDocuments"
                    value={formData.tenderDocuments}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Dummy Image Upload */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Bild-Upload (Dummy)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-300 mb-1">Projektbild hochladen</label>
                  <input
                    type="file"
                    id="imageUpload"
                    name="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {previewImage && (
                  <div className="relative w-full h-48 rounded-md overflow-hidden border border-white/10">
                    <Image src={previewImage} alt="Vorschau" layout="fill" objectFit="cover" />
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Ausschreibung erstellen
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}