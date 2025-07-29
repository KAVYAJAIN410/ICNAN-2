import { title } from "process";

export default function CallForPapers() {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6 text-justify">
        <h1 className="text-3xl font-bold text-center">Call for Papers – ICNAN '25</h1>
  
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Submission Guidelines</h2>
          <p>
            Participants are requested to submit extended abstracts including the manuscript title, author(s), affiliation(s), and contact details.
            The abstract should clearly indicate the research work, methodology, major results, and conclusion.
          </p>
          <p>
            The committee will evaluate the full paper and decide whether the paper will be presented as an oral or poster presentation.
            The mode of presentation will be updated in the first week of December 2025 on the website.
          </p>
        </section>
  
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Publications & Proceedings </h2>
          <p>
            ICNAN '25 encourages original and unpublished work. Extended abstracts will be published in digital proceedings with an online ISBN number.
          </p>
          <p>
            Based on the scope and quality of the work, the accepted full papers will be assigned to Scopus Indexed Journals.
            The timely submitted full papers to ICNAN '25 will be evaluated by the committee for originality and subjected to the regular peer-review process by the assigned journals.
          </p>
        </section>




  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
    {[
      { id:1,
        title: "ACS Applied Nanomaterials (IF: 5.5)",
        link: "https://pubs.acs.org/journal/aanmf6",
        img: "https://pubs.acs.org/cms/10.1021/aanmf6.2022.5.issue-10/asset/18b04b89-8118-04b8-7811-b04b8978118b/aanmf6.2022.5.issue-10.largecover.jpg"
      },
      { id:2,
        title: "IOP Nanotechnology (IF: 2.8)",
        link: "https://iopscience.iop.org/journal/0957-4484",
        img: "https://cms.iopscience.org/0949f078-ec1f-11e5-b0b6-759f86a2008e/journal_cover?guest=true"
      },
      { id:3,
        title: "IOP Nano Futures (IF: 3.3)",
        link: "https://iopscience.iop.org/journal/2399-1984",
        img: "https://cms.iopscience.org/def6ecb0-99ea-11e6-9219-831f3068eef2/journal_cover?guest=true"
      },

      {  id:4,
        title: "Energy Technology (IF: 3.6)",
        link: "https://onlinelibrary.wiley.com/journal/21944296",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRvVxIpyvFAKQEmNiZNe2nDOkg50HsXUt6w&s"
      },
      {
        id:5,
        title: "Chemistry – An Asian Journal (IF: 3.3)",
        link: "https://aces.onlinelibrary.wiley.com/journal/1861471x",
        img: "https://upload.wikimedia.org/wikipedia/en/9/95/Chemistry%2C_An_Asian_Journal_journal_cover_volume_17_issue_12.png"
      },
      { id:6,
        title: "ChemNanoMat (IF: 2.6)",
        link: "https://aces.onlinelibrary.wiley.com/journal/2199692x",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsZDPRXrOyK-aluYv28GCVHFESfANcGrd8w&s"
      },
      { id:7,
        title: "Particle & Particle Systems Characterization (IF: 3.16)",
        link: "https://onlinelibrary.wiley.com/journal/15214117",
        img: "data:image/jpeg;base64,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"
      },
        { id:8,
        title: "ELSEVIER Materials Today Chemistry (IF 6.7)",
        link: "https://www.sciencedirect.com/journal/materials-today-chemistry",
        img: "/ELSEVIER.jpg"
      },
    ].map((journal, idx) => (
       <div
    key={idx}
    className="flex flex-col sm:flex-row items-center border p-4 sm:p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 w-full max-w-3xl mx-auto"
  >
    <img
      src={journal.img}
      alt={journal.title}
      className="w-32 h-32 sm:w-36 sm:h-36 object-contain mb-4 sm:mb-0 sm:mr-6"
    />

    <div className="text-center sm:text-left w-full overflow-hidden">
      {[3, 4, 5, 6, 7].includes(journal.id) && (
        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Times New Roman, Times' }}>
          Wiley
        </h3>
      )}

      <h3 className="font-semibold text-lg mb-2">{journal.title}</h3>

      <a
        href={journal.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline break-words break-all text-sm sm:text-base"
        style={{ wordWrap: 'break-word' }}
      >
        {journal.link}
      </a>
    </div>
  </div>
    ))}
    More Journals will be updated soon
  </div>
  






  
       
      </div>
    );
  }