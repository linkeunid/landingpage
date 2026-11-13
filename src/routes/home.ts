// Home page copy, EN + ID. Facts mirror the apps: lkmn.link (shortlink/s-app privacy page),
// Newda (mono/mono-app privacy page). Change a fact there, change it here.
const LKMN = 'https://lkmn.link';
const NEWDA = 'https://newda.linkeun.com';

type Value = { h: string; p: string; proof?: { label: string; href: string } };

const en = {
	lede: 'A small studio in Indonesia that builds quiet tools for the web.',
	products: 'Products',
	lkmn: {
		what: 'Short links with visit counts and QR codes. A quick link needs no account.',
		state: 'Live',
		act: 'Shorten a link',
		example: 'An example short link and the address it opens'
	},
	newda: {
		what: 'Anime, manga and light novels as one map: studios, staff, voice actors and the franchises that tie them together.',
		state: 'Waitlist open',
		act: 'Join the waitlist',
		nodes: ['Series', 'Studio', 'Voice actor', 'Franchise'],
		example: 'A small map: a series linked to its studio, a voice actor and its franchise'
	},
	about: 'About',
	prose:
		'Linkeun Mono is one person making small web tools. Each one is cut to a single job, fitted with care, and kept running after launch.',
	values: [
		{
			h: 'One job each',
			p: 'lkmn.link only shortens links. Newda only maps anime, manga and light novels.'
		},
		{
			h: 'Keep less',
			p: 'lkmn.link never saves your internet address with a visit, and deletes visit records after 90 days.',
			proof: { label: 'lkmn.link privacy', href: `${LKMN}/privacy` }
		},
		{
			h: 'No ads',
			p: 'No ads and no trackers. The Newda site sets no cookies at all.',
			proof: { label: 'Newda privacy', href: `${NEWDA}/privacy` }
		}
	] as Value[],
	contact: 'Contact',
	contactLede:
		'Have an idea for a small tool, or found a bug? Write in. A person reads every email, not a bot.'
};

export const COPY: Record<'en' | 'id', typeof en> = {
	en,
	id: {
		lede: 'Studio kecil di Indonesia yang membuat alat web sederhana.',
		products: 'Produk',
		lkmn: {
			what: 'Tautan pendek dengan hitungan kunjungan dan kode QR. Tautan cepat tidak perlu akun.',
			state: 'Aktif',
			act: 'Pendekkan tautan',
			example: 'Contoh tautan pendek dan alamat yang dibukanya'
		},
		newda: {
			what: 'Anime, manga, dan light novel dalam satu peta: studio, staf, pengisi suara, dan waralaba yang menghubungkannya.',
			state: 'Daftar tunggu dibuka',
			act: 'Gabung daftar tunggu',
			nodes: ['Seri', 'Studio', 'Pengisi suara', 'Waralaba'],
			example: 'Peta kecil: sebuah seri terhubung ke studio, pengisi suara, dan waralabanya'
		},
		about: 'Tentang',
		prose:
			'Linkeun Mono adalah satu orang yang membuat alat web kecil. Masing-masing dibuat untuk satu tugas, dirakit dengan teliti, dan tetap dirawat setelah rilis.',
		values: [
			{
				h: 'Satu tugas',
				p: 'lkmn.link hanya memendekkan tautan. Newda hanya memetakan anime, manga, dan light novel.'
			},
			{
				h: 'Simpan sedikit',
				p: 'lkmn.link tidak pernah menyimpan alamat internetmu bersama kunjungan, dan menghapus catatan kunjungan setelah 90 hari.',
				proof: { label: 'Privasi lkmn.link', href: `${LKMN}/privacy` }
			},
			{
				h: 'Tanpa iklan',
				p: 'Tanpa iklan dan tanpa pelacak. Situs Newda sama sekali tidak memakai cookie.',
				proof: { label: 'Privasi Newda', href: `${NEWDA}/privacy` }
			}
		],
		contact: 'Kontak',
		contactLede:
			'Punya ide alat kecil, atau menemukan bug? Kirim email. Setiap pesan dibaca orang, bukan bot.'
	}
};

export const LINKS = {
	lkmn: LKMN,
	newda: NEWDA,
	waitlist: `${NEWDA}/#waitlist`,
	// what the slip shows: a real-looking long address, shortened
	example: {
		short: 'lkmn.link/launch',
		long: 'example.com/events/2026/product-launch?ref=newsletter'
	}
};
