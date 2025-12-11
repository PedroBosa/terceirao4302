document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // CONFIGURAÇÃO DA GALERIA
    // =========================================================================
    // Para adicionar suas fotos:
    // 1. Coloque os arquivos na pasta "memories".
    // 2. Adicione o nome dos arquivos nesta lista abaixo.
    // =========================================================================

    const localFiles = [
        // Fotos (JPG) - Destaques no carrossel
        { type: 'photo', file: '366117c6-c70f-44ff-be6d-7489996cd1bb.jpg' },
        { type: 'photo', file: '1e4b3f09-adbd-4d87-a8b6-5a9bf1ab57ac.JPG' },
        { type: 'photo', file: '1e59db2d-167e-4ae7-86b5-bd93754cabae.jpg' },
        { type: 'photo', file: '5e1e2f03-acbe-4492-b622-6cc9d0a3d5b1.jpg' },
        { type: 'photo', file: 'IMG_0518_Original.jpg' },
        { type: 'photo', file: 'IMG-20241213-WA0011_Original.jpg' },
        // Outras fotos
        { type: 'photo', file: '0345a02b-e82f-45cf-a080-737574244e92.jpg' },
        { type: 'photo', file: '07dc98c0-ff54-4eb8-b064-bcdde4d04704.jpg' },
        { type: 'photo', file: '0821d250-7778-4bd8-a135-00bc808e7d94.JPG' },
        { type: 'photo', file: '09ab86ff-7f07-44d0-a7eb-503e94a7bcbd.JPG' },
        { type: 'photo', file: '0b4858eb-9648-44ba-a9a4-558117bf836e.jpg' },
        { type: 'photo', file: '121085b7-535d-4b6a-9101-a04b27fb59f2.jpg' },
        { type: 'photo', file: '14a942ff-82df-4a9c-aa29-79fdce8122aa.JPG' },
        { type: 'photo', file: '15799e98-450c-4106-b226-72728a6fb1a8.JPG' },
        { type: 'photo', file: '161cbd8e-470c-48ef-8831-6025fa18b03c.JPG' },
        { type: 'photo', file: '1aba3700-6815-4025-9fd8-a98045366cee.JPG' },
        { type: 'photo', file: '1ad27f31-8894-4fab-91cf-5bdb989868d0.JPG' },
        { type: 'photo', file: '1ceaf74b-c19a-4af7-a449-6309301cde08.JPG' },
        { type: 'photo', file: '1e4b3f09-adbd-4d87-a8b6-5a9bf1ab57ac.JPG' },
        { type: 'photo', file: '1e59db2d-167e-4ae7-86b5-bd93754cabae.jpg' },
        { type: 'photo', file: '1ec56474-6981-4d7a-9044-11a1c2b9b7fe.jpg' },
        { type: 'photo', file: '2260d595-62db-4798-bfc1-6cf983c89c50.jpg' },
        { type: 'photo', file: '2328183d-dd98-44f5-af7e-f3b5827d1260.jpg' },
        { type: 'photo', file: '27e085cd-7846-457c-82e8-cf3441b99799.jpg' },
        { type: 'photo', file: '280487fe-7923-4083-8b52-cde8567ba8bf.jpg' },
        { type: 'photo', file: '28f2f303-3369-4669-86a4-56d76605136f.jpg' },
        { type: 'photo', file: '2910f983-b1e3-4843-90cb-09e7e5e3b96d.jpg' },
        { type: 'photo', file: '2ac172da-c056-4cca-853f-14a931a3dcea.jpg' },
        { type: 'photo', file: '2cde5167-2ea3-46e5-9687-ea95e4ac78f6.jpg' },
        { type: 'photo', file: '308afbe3-12d9-4c2b-9394-667ed898dbdf.JPG' },
        { type: 'photo', file: '345f2adc-b9be-4115-b651-221b485020fc.JPG' },
        { type: 'photo', file: '366117c6-c70f-44ff-be6d-7489996cd1bb.jpg' },
        { type: 'photo', file: '3733fd47-3077-45fb-8e42-1f9140db586d.JPG' },
        { type: 'photo', file: '3a91cf37-13c3-4aac-9d51-6ea3fcfe0269.jpg' },
        { type: 'photo', file: '3bd91186-1997-4ff0-bc85-8c69c8274046.jpg' },
        { type: 'photo', file: '3cadf2ea-2ea2-4691-85df-7fd08f41947c.JPG' },
        { type: 'photo', file: '3d83895d-80c3-4dc4-8d61-65fee594b5de.jpg' },
        { type: 'photo', file: '3da3feb8-4497-4bc7-930d-e010be50954d.jpg' },
        { type: 'photo', file: '4260f1c3-108f-44aa-80d4-b6cd5ec07c76.jpg' },
        { type: 'photo', file: '44129a89-7e8d-48ca-903c-fd13574075cd.jpg' },
        { type: 'photo', file: '44cbb25a-83ed-4a73-b1fc-bbb474dc89d4.JPG' },
        { type: 'photo', file: '4513b6c2-04b0-4182-a579-9816b4dc7159.jpg' },
        { type: 'photo', file: '4577e174-bcea-4f00-8402-7618580df890.JPG' },
        { type: 'photo', file: '481a53ad-0e8c-43d8-8459-967d1cd1b7b5.jpg' },
        { type: 'photo', file: '4bb24901-8cb6-46fb-a047-080aad596067.JPG' },
        { type: 'photo', file: '4f328445-a8d7-4d15-b08d-dc17577628cd.JPG' },
        { type: 'photo', file: '500d2be1-48c9-4193-a8cd-72331b2b99df.JPG' },
        { type: 'photo', file: '50d2c284-27cd-4cb8-8d2c-381316e23427.JPG' },
        { type: 'photo', file: '51183968-7db0-428b-bb2a-526ad419c4c6.jpg' },
        { type: 'photo', file: '5289d4ba-56c9-4238-ae27-5f880289c9a8.jpg' },
        { type: 'photo', file: '59af4d4c-c089-464f-ab0c-77761a1d3c03.jpg' },
        { type: 'photo', file: '5b3d9530-8cee-4487-8633-6436ea71a7c3.JPG' },
        { type: 'photo', file: '5b93cfd0-c78a-4ffb-89f7-8a7cf20e44ec.JPG' },
        { type: 'photo', file: '5dc39d47-92c9-40e8-b4b9-f15b93d5711b.jpg' },
        { type: 'photo', file: '5e1e2f03-acbe-4492-b622-6cc9d0a3d5b1.jpg' },
        { type: 'photo', file: '5e9ec003-ef37-4252-b2a6-e09150b1ec9b.jpg' },
        { type: 'photo', file: '5f0e7f18-d30a-4a8f-bc67-99f14832a916.jpg' },
        { type: 'photo', file: '65cd3a47-701e-4589-98e4-dbaabcb8506b.JPG' },
        { type: 'photo', file: '6dd40c70-b059-4257-8d2c-4c328a377997.jpg' },
        { type: 'photo', file: '706d92dd-2b85-4e85-8d9a-bdfa6ed336ee.jpg' },
        { type: 'photo', file: '74021eed-a17a-45fc-9ced-fead44c1061c.jpg' },
        { type: 'photo', file: '7589ce0f-7d2b-4055-962f-98b37a5d7c42.jpg' },
        { type: 'photo', file: '797f3c8b-cdce-4b00-9a0e-6aa4fbcfcadf.jpg' },
        { type: 'photo', file: '7a319050-e709-4d11-a017-eca4352ee6c0.JPG' },
        { type: 'photo', file: '7aa4b1c4-1b50-437b-94e2-51da9a7ebb67.jpg' },
        { type: 'photo', file: '7d4fb43f-43c6-4abf-8cda-c47df5da6591.jpg' },
        { type: 'photo', file: '8079f7aa-9b68-4db4-8e0b-bc7546f15af9.jpg' },
        { type: 'photo', file: '8623e8ab-2617-46e6-9431-e15c2e154d75.jpg' },
        { type: 'photo', file: '8864f947-6b96-4c6d-8d12-e5eab053c27e.jpg' },
        { type: 'photo', file: '8c76d9bf-80c5-45df-a2e5-bcd80c568fb8.jpg' },
        { type: 'photo', file: '8cccf5bd-b6e7-4197-b207-4607e85b9921.jpg' },
        { type: 'photo', file: '8dc17d40-4f62-4f39-8f87-c9e5dc4af057.jpg' },
        { type: 'photo', file: '900b6aef-e638-4821-ac58-d76fcfa89161.jpg' },
        { type: 'photo', file: '94331cfc-5c97-4c64-8933-14ca5e0c25c2.jpg' },
        { type: 'photo', file: '947ac862-2834-4189-8f0c-d2515d0e8f83.jpg' },
        { type: 'photo', file: '97f4d758-457f-4e76-91c6-975f5b28e57a.JPG' },
        { type: 'photo', file: '9d1a52e3-f353-4ca4-a42a-60cccdc27dd9.jpg' },
        { type: 'photo', file: 'IMG-20240627-WA0011_Original.jpg' },
        { type: 'photo', file: 'IMG-20240627-WA0023_Original.jpg' },
        { type: 'photo', file: 'IMG-20241130-WA0010_Original.jpg' },
        { type: 'photo', file: 'IMG-20241130-WA0011_Original.jpg' },
        { type: 'photo', file: 'IMG-20241130-WA0012_Original.jpg' },
        { type: 'photo', file: 'IMG-20241205-WA0011_Original.jpg' },
        { type: 'photo', file: 'IMG-20241205-WA0016_Original.jpg' },
        { type: 'photo', file: 'IMG-20241210-WA0043_Original.jpg' },
        { type: 'photo', file: 'IMG-20241213-WA0007_Original.jpg' },
        { type: 'photo', file: 'IMG-20241213-WA0011_Original.jpg' },
        { type: 'photo', file: 'IMG-20241219-WA0010_Original.jpg' },
        { type: 'photo', file: 'IMG_0518_Original.jpg' },
        { type: 'photo', file: 'IMG_1844_Original.jpg' },
        { type: 'photo', file: 'IMG_2285.jpg' },
        { type: 'photo', file: 'IMG_2286.jpg' },
        { type: 'photo', file: 'IMG_2287.jpg' },
        { type: 'photo', file: 'IMG_2288.JPG' },
        { type: 'photo', file: 'IMG_2289.jpg' },
        { type: 'photo', file: 'IMG_2291.jpg' },
        { type: 'photo', file: 'IMG_2489.jpg' },
        { type: 'photo', file: 'IMG_2515.jpg' },
        { type: 'photo', file: 'IMG_9551_Original.jpg' },
        { type: 'photo', file: 'IMG_9595_Original.jpg' },
        { type: 'photo', file: 'a045bc31-28d4-4079-b19c-212f7b1477e5.jpg' },
        { type: 'photo', file: 'a07d9426-2a93-4f3f-b780-d2a540b9f3ed.jpg' },
        { type: 'photo', file: 'a1a32d3d-0b51-4830-b549-fce8b7711396.JPG' },
        { type: 'photo', file: 'a26b47cf-a44c-42be-bffc-2c425f871827.jpg' },
        { type: 'photo', file: 'a44d0589-eda6-4cb2-9d71-85e0c17bcc72.jpg' },
        { type: 'photo', file: 'a7316e72-503f-4c8a-9767-c2da1862e7aa.jpg' },
        { type: 'photo', file: 'a809c5a2-8f25-4948-b056-3fb78eb3974f.JPG' },
        { type: 'photo', file: 'a91f5c8c-28a2-427c-be71-0b1f53127907.jpg' },
        { type: 'photo', file: 'ab69532b-2f6b-41e4-9fc6-ea5dd904ac6d.JPG' },
        { type: 'photo', file: 'ad01cac4-c4ff-442c-aaf2-98c2be38e035.jpg' },
        { type: 'photo', file: 'b127b730-f1e3-466a-a453-d40f5c5cab81.jpg' },
        { type: 'photo', file: 'b38c749e-3f3a-4841-8d49-de6b32e81ffd.JPG' },
        { type: 'photo', file: 'b787c9bf-3416-4ef5-8afa-ed4a4793e1aa.JPG' },
        { type: 'photo', file: 'b9f7db87-c20b-4dbe-a7ed-be392299b159.jpg' },
        { type: 'photo', file: 'ba3a44d0-2289-4d8b-881a-0b9cf6ca3ff3.jpg' },
        { type: 'photo', file: 'baccf05f-6884-423c-aa9c-702b2e47ecf1.jpg' },
        { type: 'photo', file: 'bb1163b4-09ba-4789-a250-a12bf7f0c4a0.jpg' },
        { type: 'photo', file: 'bb32fcb1-4a67-4daf-944f-8a6cb19dbf80.JPG' },
        { type: 'photo', file: 'bd5e9aaa-7a5c-4136-b857-c8fd9dd2639e.jpg' },
        { type: 'photo', file: 'bdd58e4f-47c7-47e8-8119-763f5bb18974.jpg' },
        { type: 'photo', file: 'c3854f5d-c844-4099-872d-696b9040e175.jpg' },
        { type: 'photo', file: 'c3c3f68d-985b-4b76-8abc-7a28a206549c.jpg' },
        { type: 'photo', file: 'c6096ca3-d530-4b32-aa53-cec7351c87f0.JPG' },
        { type: 'photo', file: 'c60cc647-1c60-4f0e-a499-2e460b263745.jpg' },
        { type: 'photo', file: 'ccef4e2b-4284-489c-ab9e-52f4ff5d179e.jpg' },
        { type: 'photo', file: 'cea3df4e-60d2-4db1-a67b-2ef88ba8a874.JPG' },
        { type: 'photo', file: 'd2616311-01fb-43d9-926e-e066b6d78c95.jpg' },
        { type: 'photo', file: 'd48270a1-b0c7-4ce0-b12d-43aa0a1bb815.jpg' },
        { type: 'photo', file: 'd4dc768e-f6be-4773-a0c8-8cec6a793e63.JPG' },
        { type: 'photo', file: 'd8d97a08-3d98-4f51-89eb-791459b8999c.jpg' },
        { type: 'photo', file: 'd9411ea5-4143-432f-99ac-e798d73e8742.jpg' },
        { type: 'photo', file: 'db89686b-b2df-4deb-9a0b-c54fe6b2c52d.JPG' },
        { type: 'photo', file: 'de9505f2-60a6-4ea3-961d-329a43edbb5b.JPG' },
        { type: 'photo', file: 'e116d3b7-d01e-41f5-a9d5-85df6d5c8a9b.jpg' },
        { type: 'photo', file: 'e7c1502c-5444-46b6-8ea4-46395f35c7c5.jpg' },
        { type: 'photo', file: 'ed523de8-61bd-4b13-99bf-5e8d7700783f.jpg' },
        { type: 'photo', file: 'efb93c0c-bfcd-4c4c-9346-d7d5e69324f6.JPG' },
        { type: 'photo', file: 'f6579356-53c5-4320-bf6a-0b920b28323a.jpg' },
        { type: 'photo', file: 'f81f234e-c052-4272-80df-228b3d00d9c5.jpg' },
        { type: 'photo', file: 'f8d506c0-ff5c-4dae-94aa-23580372d595.jpg' },
        { type: 'photo', file: 'fd1a2c83-a43b-4991-8ce3-acf80e563127.jpg' },
        // Vídeos (MP4)
        { type: 'video', file: '0b3302d8-a1b3-43e7-b286-9a97e851f8d1.MP4' },
        { type: 'video', file: '21e8e002-fda5-42a7-bb1f-6b43b8b5f4b0.MP4' },
        { type: 'video', file: '3daae5a5-355a-419a-aca2-d49cb7eaff77.MP4' },
        { type: 'video', file: '3f17bb09-4a56-4b8d-b569-f98047a44d63.MP4' },
        { type: 'video', file: '5567ef0a-bd25-4b77-a4f3-fbaf010eb510.MP4' },
        { type: 'video', file: '590b4723-94f6-45e7-b448-2946db7eb0bb.MP4' },
        { type: 'video', file: '68f72086-0ebb-416e-b998-9c1694d6caf0.MP4' },
        { type: 'video', file: '6d7284a7-bd03-41bf-aae1-cb3df2435716.MP4' },
        { type: 'video', file: '7425c05c-401d-4238-ad01-d4af30ec8c69.MP4' },
        { type: 'video', file: 'a9df3340-50c3-4727-826e-bd1607f851bf.MP4' },
        { type: 'video', file: 'de87c1c1-8ab4-4630-a828-b00bf5fadbd3.MP4' },
        { type: 'video', file: 'ed0928ee-6cc6-48e6-b871-fd33e5629333.MP4' },
        { type: 'video', file: 'fc2b13f6-aefb-47d9-9736-19bc51685bf6.MP4' },
        { type: 'video', file: 'fcc38912-2c7d-4e8a-8805-acdc4f6fd4b2.MP4' },
        { type: 'video', file: 'VIDEO-2025-12-10-17-10-04.MP4' },
        { type: 'video', file: 'VIDEO-2025-12-10-17-10-21.MP4' },
        { type: 'video', file: 'VIDEO-2025-12-10-17-10-22.MP4' },
        { type: 'video', file: 'VIDEO-2025-12-10-17-10-49 2.MP4' },
        { type: 'video', file: 'VIDEO-2025-12-10-17-10-49.MP4' },
        // Vídeos (MOV) - podem funcionar em alguns navegadores
        { type: 'video', file: '11cc1581-ac46-4695-b97b-036340dbe066.mov' },
        { type: 'video', file: '14d1ac79-83a2-48e3-9bd6-c9bde447711a.mov' },
        { type: 'video', file: '17ec23f3-43bd-4f55-99ef-5fa28a6433c4.mov' },
        { type: 'video', file: '1f293afa-a932-45e7-8157-2310ee9a1b48.mov' },
        { type: 'video', file: '1f5ef624-cc84-46ab-92b7-cc1168d66ffd.mov' },
        { type: 'video', file: '2028766f-f307-45d4-abe1-499896d836c5.mov' },
        { type: 'video', file: '2832200d-735f-476c-8c6f-95b83e8fecfa.mov' },
        { type: 'video', file: '2ea63d79-ef3a-4144-a910-80cc379fa3fa.mov' },
        { type: 'video', file: '2f6222ab-7ccb-4558-beab-aa6b419ce4f9.mov' },
        { type: 'video', file: '346e6ebd-ea48-4a06-973c-c73b9fbe2845.mov' },
        { type: 'video', file: '35454c7f-3f0b-4221-9f81-435b9d9c0e68.mov' },
        { type: 'video', file: '3d2a9bb6-0989-40a1-8344-e066e3858270.mov' },
        { type: 'video', file: '44ea447a-d4b0-4392-ab33-f466f2ce928f.mov' },
        { type: 'video', file: '48d0c74b-a2b8-48da-ad34-3422ed0ab07e.mov' },
        { type: 'video', file: '5567ef0a-bd25-4b77-a4f3-fbaf010eb510.MOV' },
        { type: 'video', file: '560a099c-3817-4e79-b3b9-5c9472f41187.mov' },
        { type: 'video', file: '56c42766-db3b-4d3a-8b9c-68a065eb8cbd.mov' },
        { type: 'video', file: '576b9002-0853-498f-9c26-56d3f07d7061.mov' },
        { type: 'video', file: '58cb6f2a-fb24-4798-b526-55b633ee76ec.mov' },
        { type: 'video', file: '5cffc74d-d244-485f-87f6-84522c2cc25b.mov' },
        { type: 'video', file: '5ea5a772-bde6-4d7a-85b1-30d0ac6d62b5.mov' },
        { type: 'video', file: '6abbb101-531e-44bb-84f9-ecb7498855bf.mov' },
        { type: 'video', file: '77b44aff-1fd9-485d-bf1d-aa97436bbff7.mov' },
        { type: 'video', file: '799a2f4f-2150-41bb-a831-09644d3d6a71.mov' },
        { type: 'video', file: '953e3e65-d4fe-41ae-96b3-a4451fdfcb67.mov' },
        { type: 'video', file: '9d1d6a26-0c4b-4b34-8821-0b0e8118304b.mov' },
        { type: 'video', file: 'IMG_2236.MOV' },
        { type: 'video', file: 'VID-20241204-WA0038.mov' },
        { type: 'video', file: 'VIDEO-2025-12-10-17-10-49.mov' },
        { type: 'video', file: 'VIDEO-2025-12-10-17-10-50.mov' },
        { type: 'video', file: 'aa8b0a0c-f485-400b-adae-7f903566fd2e.mov' },
        { type: 'video', file: 'ad381755-7e75-4cd8-8fa6-b57e7ca82e6a.mov' },
        { type: 'video', file: 'b12f3f0d-8fdb-4ac3-a30a-6d05cfdfd43e.mov' },
        { type: 'video', file: 'b4f6bdae-9511-468d-8e72-125842c968cf.mov' },
        { type: 'video', file: 'b67bba67-c26e-4ab8-a2b6-caf00bad5032.mov' },
        { type: 'video', file: 'c1b9e9d0-6582-4915-b7f2-42015b0018a6.mov' },
        { type: 'video', file: 'ca995364-55cf-4dd0-b595-12e538c2e388.mov' },
        { type: 'video', file: 'dafefaad-7b43-4219-9c11-e287b4c697d6.mov' },
        { type: 'video', file: 'e7b5d6da-313e-4f26-8cf8-0feca0838bc5.mov' },
        { type: 'video', file: 'ecac44ce-f25d-47ae-8ceb-4040ef9d212b.mov' },
        { type: 'video', file: 'fc487b58-b688-4188-90b0-a589c6f9683f.mov' },
        { type: 'video', file: 'fe0312ed-63c4-4b89-b652-d5f36a210d9c.mov' }
    ];

    // --- State ---
    const state = {
        media: [],
        filter: 'all'
    };

    // --- DOM Elements ---
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photoCountEl = document.getElementById('photo-count');
    const videoCountEl = document.getElementById('video-count');
    const memoryCountEl = document.getElementById('memory-count');
    const particlesContainer = document.getElementById('particles');

    // Lightbox Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentLightboxIndex = -1;

    // --- Create Floating Particles ---
    function createParticles() {
        if (!particlesContainer) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 100 + 30;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

            particlesContainer.appendChild(particle);
        }
    }

    // --- Load Data ---
    function loadMemories() {
        state.media = localFiles.map((item, index) => ({
            id: index,
            type: item.type,
            src: item.file ? `memories/${item.file}` : item.url
        }));

        updateStats();
        renderGallery();
    }

    // --- Functions ---
    function updateStats() {
        const photos = state.media.filter(m => m.type === 'photo').length;
        const videos = state.media.filter(m => m.type === 'video').length;

        animateCounter(photoCountEl, photos);
        animateCounter(videoCountEl, videos);
        animateCounter(memoryCountEl, state.media.length);
    }

    function animateCounter(el, target) {
        const duration = 1500;
        const start = parseInt(el.innerText) || 0;
        const increment = (target - start) / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
                el.innerText = target;
                clearInterval(timer);
            } else {
                el.innerText = Math.floor(current);
            }
        }, 16);
    }

    function renderGallery() {
        galleryGrid.innerHTML = '';
        const filteredMedia = state.media.filter(item =>
            state.filter === 'all' || item.type === state.filter
        );

        filteredMedia.forEach((item) => {
            const el = document.createElement('div');
            el.className = 'gallery-item';

            // Find the index in the original full list to ensure lightbox works with filters
            const originalIndex = state.media.indexOf(item);
            el.dataset.index = originalIndex;

            let content;
            if (item.type === 'photo') {
                content = `<img src="${item.src}" alt="Memória" loading="lazy">
                           <div class="gallery-overlay"><i class="fa-solid fa-expand item-icon"></i></div>`;
            } else {
                content = `<video src="${item.src}#t=0.1" preload="metadata"></video>
                           <div class="gallery-overlay"><i class="fa-solid fa-play item-icon"></i></div>`;
            }

            el.innerHTML = content;
            el.onclick = () => openLightbox(el.dataset.index);
            galleryGrid.appendChild(el);
        });
    }

    // --- Event Listeners ---

    // Filters
    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filter = btn.dataset.filter;
            renderGallery();
        };
    });

    // Lightbox Logic
    function openLightbox(index) {
        currentLightboxIndex = parseInt(index);
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateLightboxContent() {
        const item = state.media[currentLightboxIndex];
        if (!item) return;

        if (item.type === 'photo') {
            lightboxImg.src = item.src;
            lightboxImg.classList.remove('hidden');
            lightboxVideo.classList.add('hidden');
            lightboxVideo.pause();
        } else {
            lightboxVideo.src = item.src;
            lightboxVideo.classList.remove('hidden');
            lightboxImg.classList.add('hidden');
            lightboxVideo.play();
        }
    }

    function nextItem() {
        currentLightboxIndex = (currentLightboxIndex + 1) % state.media.length;
        updateLightboxContent();
    }

    function prevItem() {
        currentLightboxIndex = (currentLightboxIndex - 1 + state.media.length) % state.media.length;
        updateLightboxContent();
    }

    closeLightboxBtn.onclick = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        lightboxVideo.pause();
    };

    nextBtn.onclick = nextItem;
    prevBtn.onclick = prevItem;

    // Keyboard Nav
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightboxBtn.click();
        if (e.key === 'ArrowRight') nextItem();
        if (e.key === 'ArrowLeft') prevItem();
    });

    // =========================================================================
    // MUSIC PLAYER
    // =========================================================================
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const musicProgressBar = document.getElementById('music-progress-bar');

    if (musicToggle && backgroundMusic) {
        let isPlaying = false;

        musicToggle.onclick = () => {
            if (isPlaying) {
                backgroundMusic.pause();
                musicToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
                musicToggle.classList.remove('playing');
            } else {
                backgroundMusic.play();
                musicToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
                musicToggle.classList.add('playing');
            }
            isPlaying = !isPlaying;
        };

        // Update progress bar
        backgroundMusic.ontimeupdate = () => {
            if (backgroundMusic.duration) {
                const progress = (backgroundMusic.currentTime / backgroundMusic.duration) * 100;
                musicProgressBar.style.width = progress + '%';
            }
        };
    }

    // =========================================================================
    // CAROUSEL
    // =========================================================================
    const carouselTrack = document.getElementById('carousel-track');
    const carouselPrevBtn = document.getElementById('carousel-prev');
    const carouselNextBtn = document.getElementById('carousel-next');
    const carouselDotsContainer = document.getElementById('carousel-dots');

    let carouselIndex = 0;
    const featuredCount = 12; // Number of featured items

    function getItemsPerView() {
        return window.innerWidth < 768 ? 1 : 3;
    }

    function initCarousel() {
        if (!carouselTrack) return;

        // Get first N photos for carousel
        const featuredItems = state.media.filter(m => m.type === 'photo').slice(0, featuredCount);

        // Render carousel items
        carouselTrack.innerHTML = '';
        featuredItems.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'carousel-item';
            el.innerHTML = `
                <img src="${item.src}" alt="Destaque" loading="lazy">
                <div class="carousel-overlay">
                    <i class="fa-solid fa-expand"></i>
                </div>
            `;
            el.onclick = () => openLightbox(state.media.indexOf(item));
            carouselTrack.appendChild(el);
        });

        // Create dots
        updateCarouselDots();
        updateCarousel();
    }

    function updateCarouselDots() {
        if (!carouselDotsContainer || !carouselTrack) return;
        const itemsPerView = getItemsPerView();
        const totalSlides = Math.ceil(carouselTrack.children.length / itemsPerView);
        carouselDotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === carouselIndex ? ' active' : '');
            dot.onclick = () => goToSlide(i);
            carouselDotsContainer.appendChild(dot);
        }
    }

    function updateCarousel() {
        if (!carouselTrack || !carouselTrack.children[0]) return;
        const itemsPerView = getItemsPerView();
        const itemWidth = carouselTrack.children[0].offsetWidth;
        const gap = window.innerWidth < 768 ? 0 : 24;
        const offset = carouselIndex * (itemWidth + gap);
        carouselTrack.style.transform = `translateX(-${offset}px)`;

        // Update dots
        const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === carouselIndex);
        });
    }

    function goToSlide(index) {
        if (!carouselTrack) return;
        const itemsPerView = getItemsPerView();
        const totalSlides = Math.ceil(carouselTrack.children.length / itemsPerView);
        carouselIndex = Math.max(0, Math.min(index, totalSlides - 1));
        updateCarousel();
    }

    if (carouselPrevBtn) {
        carouselPrevBtn.onclick = () => goToSlide(carouselIndex - 1);
    }
    if (carouselNextBtn) {
        carouselNextBtn.onclick = () => goToSlide(carouselIndex + 1);
    }

    // Auto-slide carousel
    setInterval(() => {
        if (!carouselTrack) return;
        const itemsPerView = getItemsPerView();
        const totalSlides = Math.ceil(carouselTrack.children.length / itemsPerView);
        if (totalSlides > 1) {
            carouselIndex = (carouselIndex + 1) % totalSlides;
            updateCarousel();
        }
    }, 5000);

    // Handle resize for carousel
    window.addEventListener('resize', () => {
        carouselIndex = 0;
        updateCarouselDots();
        updateCarousel();
    });

    // Init
    createParticles();
    loadMemories();

    // Initialize carousel after media is loaded
    setTimeout(initCarousel, 100);
});
