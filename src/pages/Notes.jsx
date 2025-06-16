import { useEffect, useState } from "react";
import { notesAPI } from "../services/notesAPI";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Notes() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [notes, setNotes] = useState([]);

    const [dataForm, setDataForm] = useState({
        title: "",
        content: "",
    });

    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            setSuccess("");

            if (editMode) {
                const confirmEdit = window.confirm("Yakin ingin menyimpan perubahan?");
                if (!confirmEdit) {
                    setLoading(false);
                    return;
                }

                await notesAPI.updateNote(editId, dataForm);
                setSuccess("Catatan berhasil diperbarui!");
            } else {
                await notesAPI.createNote(dataForm);
                setSuccess("Catatan berhasil ditambahkan!");
            }

            setDataForm({ title: "", content: "" });
            setEditMode(false);
            setEditId(null);
            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (note) => {
        setEditMode(true);
        setEditId(note.id);
        setDataForm({
            title: note.title,
            content: note.content,
        });
    };

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("Yakin ingin menghapus catatan ini?");
        if (!konfirmasi) return;

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.deleteNote(id);
            setSuccess("Catatan berhasil dihapus!");
            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const loadNotes = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await notesAPI.fetchNotes();
            setNotes(data);
        } catch (err) {
            setError("Gagal memuat catatan");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadNotes();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Notes App
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {editMode ? "Edit Catatan" : "Tambah Catatan Baru"}
                </h3>

                {error && <AlertBox type="error">{error}</AlertBox>}
                {success && <AlertBox type="success">{success}</AlertBox>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        onChange={handleChange}
                        placeholder="Judul catatan"
                        required
                        disabled={loading}
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                            focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                            duration-200 disabled:opacity-50"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        onChange={handleChange}
                        placeholder="Isi catatan"
                        required
                        rows="2"
                        disabled={loading}
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                            focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                            duration-200 resize-none disabled:opacity-50"
                    />

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                                rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                                focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                                transition-all duration-200 shadow-lg"
                        >
                            {loading
                                ? "Mohon Tunggu..."
                                : editMode
                                ? "Simpan Perubahan"
                                : "Tambah Data"}
                        </button>

                        {editMode && (
                            <button
                                type="button"
                                onClick={() => {
                                    setEditMode(false);
                                    setDataForm({ title: "", content: "" });
                                }}
                                className="px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-2xl"
                            >
                                Batal Edit
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold">
                        Daftar Catatan ({notes.length})
                    </h3>
                </div>

                {loading && <LoadingSpinner text="Memuat catatan..." />}

                {!loading && notes.length === 0 && !error && (
                    <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
                )}

                {!loading && notes.length === 0 && error && (
                    <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
                )}

                {!loading && notes.length > 0 && (
                    <GenericTable
                        columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4 font-medium text-gray-700">
                                    {index + 1}.
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-emerald-600">
                                        {note.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">
                                        {note.content}
                                    </div>
                                </td>
                                <td className="px-6 py-4 flex items-center gap-2">
                                    <button
                                        onClick={() => handleEdit(note)}
                                        disabled={loading}
                                        title="Edit"
                                    >
                                        <AiFillEdit className="text-blue-400 hover:text-red-600 text-2xl transition-colors" />
                                    </button>

                                    <button
                                        onClick={() => handleDelete(note.id)}
                                        disabled={loading}
                                        title="Hapus"
                                    >
                                        <AiFillDelete className="text-red-400 hover:text-red-600 text-2xl transition-colors" />
                                    </button>
                                </td>
                            </>
                        )}
                    />
                )}
            </div>
        </div>
    );
}
